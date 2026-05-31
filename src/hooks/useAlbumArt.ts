import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

function normalize(s: string) {
  return s.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function similarity(a: string, b: string): number {
  const na = normalize(a);
  const nb = normalize(b);
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.8;
  // word overlap score
  const wa = new Set(na.split(' '));
  const wb = new Set(nb.split(' '));
  const overlap = [...wa].filter(w => wb.has(w)).length;
  return overlap / Math.max(wa.size, wb.size);
}

async function tryItunes(title: string, artist: string, album: string): Promise<string | null> {
  // Try album search first
  try {
    const q = encodeURIComponent(`${artist} ${album}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=album&limit=10&country=us`);
    if (res.ok) {
      const data = await res.json();
      const results: { collectionName: string; artistName: string; artworkUrl100: string }[] = data?.results ?? [];
      const scored = results
        .filter(r => r.artworkUrl100)
        .map(r => ({
          url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
          score: (similarity(r.collectionName, album) * 2 + similarity(r.artistName, artist)) / 3,
        }))
        .sort((a, b) => b.score - a.score);
      if (scored.length && scored[0].score > 0.4) return scored[0].url;
    }
  } catch { /* continue */ }

  // Fall back to track search
  try {
    const q = encodeURIComponent(`${artist} ${title}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=10&country=us`);
    if (res.ok) {
      const data = await res.json();
      const results: { artistName: string; trackName: string; collectionName: string; artworkUrl100: string }[] = data?.results ?? [];
      const scored = results
        .filter(r => r.artworkUrl100)
        .map(r => ({
          url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
          score: (similarity(r.artistName, artist) + similarity(r.trackName, title)) / 2,
        }))
        .sort((a, b) => b.score - a.score);
      if (scored.length && scored[0].score > 0.4) return scored[0].url;
    }
  } catch { /* continue */ }

  return null;
}

async function tryMusicBrainz(title: string, artist: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`recording:"${title}" AND artist:"${artist}"`);
    const res = await fetch(
      `https://musicbrainz.org/ws/2/recording?query=${q}&limit=5&fmt=json`,
      { headers: { 'User-Agent': 'VibeShowcase/1.0 (mattathiasabraham@gmail.com)' } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const release = data?.recordings?.[0]?.releases?.[0];
    if (!release?.id) return null;

    const artRes = await fetch(`https://coverartarchive.org/release/${release.id}/front-500`);
    if (artRes.ok && artRes.url) return artRes.url;
  } catch { /* continue */ }
  return null;
}

async function fetchArt(title: string, artist: string, album: string): Promise<string | null> {
  const itunes = await tryItunes(title, artist, album);
  if (itunes) return itunes;
  const mb = await tryMusicBrainz(title, artist);
  return mb;
}

export function useAlbumArt(title: string, artist: string, album: string): { artUrl: string | null; loading: boolean } {
  const key = `${artist}||${album}||${title}`;
  const [artUrl, setArtUrl] = useState<string | null>(cache.get(key) ?? null);
  const [loading, setLoading] = useState(!cache.has(key));

  useEffect(() => {
    if (cache.has(key)) {
      setArtUrl(cache.get(key)!);
      setLoading(false);
      return;
    }
    let alive = true;
    const run = async () => {
      if (!pending.has(key)) pending.set(key, fetchArt(title, artist, album));
      const url = await pending.get(key)!;
      cache.set(key, url);
      if (alive) { setArtUrl(url); setLoading(false); }
    };
    run();
    return () => { alive = false; };
  }, [key, title, artist, album]);

  return { artUrl, loading };
}
