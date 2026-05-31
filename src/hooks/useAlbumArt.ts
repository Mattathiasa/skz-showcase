import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function similarity(a: string, b: string): number {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.85;
  const wa = new Set(na.split(' '));
  const wb = new Set(nb.split(' '));
  const overlap = [...wa].filter(w => w.length > 1 && wb.has(w)).length;
  return overlap / Math.max(wa.size, wb.size);
}

const KPOP_ARTISTS = ['stray kids', 'bts', 'bangtan', 'twice', 'blackpink', 'exo', 'nct'];
function isKpop(artist: string) {
  return KPOP_ARTISTS.some(k => artist.toLowerCase().includes(k));
}

interface ItunesAlbumResult {
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
}
interface ItunesTrackResult {
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
}

async function itunesAlbumSearch(query: string, country: string): Promise<ItunesAlbumResult[]> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=10&country=${country}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data?.results ?? [];
  } catch { return []; }
}

async function itunesTrackSearch(query: string, country: string): Promise<ItunesTrackResult[]> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10&country=${country}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data?.results ?? [];
  } catch { return []; }
}

function bestAlbumUrl(results: ItunesAlbumResult[], artist: string, album: string): string | null {
  const scored = results
    .filter(r => r.artworkUrl100)
    .map(r => ({
      url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
      score: similarity(r.artistName, artist) * 0.4 + similarity(r.collectionName, album) * 0.6,
    }))
    .filter(r => r.score > 0.35)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.url ?? null;
}

function bestTrackUrl(results: ItunesTrackResult[], artist: string, title: string): string | null {
  const scored = results
    .filter(r => r.artworkUrl100)
    .map(r => ({
      url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
      score: similarity(r.artistName, artist) * 0.5 + similarity(r.trackName, title) * 0.5,
    }))
    .filter(r => r.score > 0.35)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.url ?? null;
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
    const releaseId = data?.recordings?.[0]?.releases?.[0]?.id;
    if (!releaseId) return null;
    const artRes = await fetch(`https://coverartarchive.org/release/${releaseId}/front-500`);
    if (artRes.ok) return artRes.url;
  } catch { /* continue */ }
  return null;
}

async function fetchArt(title: string, artist: string, album: string): Promise<string | null> {
  const countries = isKpop(artist) ? ['kr', 'us', 'jp'] : ['us', 'gb'];

  // 1. Album search across country stores
  for (const country of countries) {
    const results = await itunesAlbumSearch(`${artist} ${album}`, country);
    const url = bestAlbumUrl(results, artist, album);
    if (url) return url;
  }

  // 2. Track search (catches singles and EPs not indexed as albums)
  for (const country of countries) {
    const results = await itunesTrackSearch(`${artist} ${title}`, country);
    const url = bestTrackUrl(results, artist, title);
    if (url) return url;
  }

  // 3. MusicBrainz + Cover Art Archive
  return tryMusicBrainz(title, artist);
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
