import type { VercelRequest, VercelResponse } from '@vercel/node';

function norm(s: string) { return s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim(); }
function sim(a: string, b: string): number {
  const na = norm(a), nb = norm(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.85;
  const wa = new Set(na.split(' ')), wb = new Set(nb.split(' '));
  const overlap = [...wa].filter(w => w.length > 1 && wb.has(w)).length;
  return overlap / Math.max(wa.size, wb.size);
}

const KPOP = ['stray kids', 'bts', 'bangtan', 'twice', 'blackpink', 'exo', 'nct'];
function isKpop(artist: string) { return KPOP.some(k => artist.toLowerCase().includes(k)); }

async function itunesAlbum(query: string, country: string, artist: string, album: string): Promise<string | null> {
  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=10&country=${country}`);
    if (!res.ok) return null;
    const data = await res.json();
    const results: { collectionName: string; artistName: string; artworkUrl100: string }[] = data?.results ?? [];
    const best = results
      .filter(r => r.artworkUrl100)
      .map(r => ({ url: r.artworkUrl100.replace('100x100bb', '600x600bb'), score: sim(r.artistName, artist) * 0.4 + sim(r.collectionName, album) * 0.6 }))
      .filter(r => r.score > 0.35)
      .sort((a, b) => b.score - a.score)[0];
    return best?.url ?? null;
  } catch { return null; }
}

async function itunesTrack(query: string, country: string, artist: string, title: string): Promise<string | null> {
  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10&country=${country}`);
    if (!res.ok) return null;
    const data = await res.json();
    const results: { trackName: string; artistName: string; artworkUrl100: string }[] = data?.results ?? [];
    const best = results
      .filter(r => r.artworkUrl100)
      .map(r => ({ url: r.artworkUrl100.replace('100x100bb', '600x600bb'), score: sim(r.artistName, artist) * 0.5 + sim(r.trackName, title) * 0.5 }))
      .filter(r => r.score > 0.35)
      .sort((a, b) => b.score - a.score)[0];
    return best?.url ?? null;
  } catch { return null; }
}

async function musicBrainz(title: string, artist: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`recording:"${title}" AND artist:"${artist}"`);
    const res = await fetch(`https://musicbrainz.org/ws/2/recording?query=${q}&limit=5&fmt=json`,
      { headers: { 'User-Agent': 'VibeShowcase/1.0 (mattathiasabraham@gmail.com)' } });
    if (!res.ok) return null;
    const data = await res.json();
    const releaseId = data?.recordings?.[0]?.releases?.[0]?.id;
    if (!releaseId) return null;
    const artRes = await fetch(`https://coverartarchive.org/release/${releaseId}/front-500`);
    if (artRes.ok) return artRes.url;
  } catch { /* continue */ }
  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const title = (req.query.title as string) ?? '';
  const artist = (req.query.artist as string) ?? '';
  const album = (req.query.album as string) ?? '';

  if (!title.trim() || !artist.trim()) return res.status(400).json({ url: null });

  const countries = isKpop(artist) ? ['kr', 'us', 'jp'] : ['us', 'gb'];
  const effectiveAlbum = album && album !== 'Unknown Album' ? album : title;

  for (const country of countries) {
    const url = await itunesAlbum(`${artist} ${effectiveAlbum}`, country, artist, effectiveAlbum);
    if (url) return res.setHeader('Cache-Control', 's-maxage=86400').status(200).json({ url });
  }
  for (const country of countries) {
    const url = await itunesTrack(`${artist} ${title}`, country, artist, title);
    if (url) return res.setHeader('Cache-Control', 's-maxage=86400').status(200).json({ url });
  }

  const url = await musicBrainz(title, artist);
  res.setHeader('Cache-Control', 's-maxage=86400').status(200).json({ url });
}
