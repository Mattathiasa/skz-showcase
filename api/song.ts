import Groq from 'groq-sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

async function fetchAlbumArt(title: string, artist: string, album: string): Promise<string | null> {
  function norm(s: string) { return s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim(); }
  function sim(a: string, b: string) {
    const na = norm(a), nb = norm(b);
    if (na === nb) return 1;
    if (na.includes(nb) || nb.includes(na)) return 0.8;
    const wa = new Set(na.split(' ')), wb = new Set(nb.split(' '));
    return [...wa].filter(w => wb.has(w)).length / Math.max(wa.size, wb.size);
  }
  try {
    const q = encodeURIComponent(`${artist} ${album || title}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=album&limit=10&country=us`);
    if (res.ok) {
      const data = await res.json();
      const results: { collectionName: string; artistName: string; artworkUrl100: string }[] = data?.results ?? [];
      const scored = results.filter(r => r.artworkUrl100).map(r => ({
        url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
        score: (sim(r.collectionName, album || title) * 2 + sim(r.artistName, artist)) / 3,
      })).sort((a, b) => b.score - a.score);
      if (scored.length && scored[0].score > 0.35) return scored[0].url;
    }
  } catch { /* continue */ }
  try {
    const q = encodeURIComponent(`${artist} ${title}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=10&country=us`);
    if (res.ok) {
      const data = await res.json();
      const results: { artistName: string; trackName: string; artworkUrl100: string }[] = data?.results ?? [];
      const scored = results.filter(r => r.artworkUrl100).map(r => ({
        url: r.artworkUrl100.replace('100x100bb', '600x600bb'),
        score: (sim(r.artistName, artist) + sim(r.trackName, title)) / 2,
      })).sort((a, b) => b.score - a.score);
      if (scored.length && scored[0].score > 0.35) return scored[0].url;
    }
  } catch { /* continue */ }
  return null;
}

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function clamp(v: number) { return Math.max(0, Math.min(100, Math.round(v))); }

function migrateStats(s: Record<string, number>) {
  return {
    happy: clamp(s.happy * 10),
    sad: clamp(s.sad * 10),
    energetic: clamp(s.hype * 10),
    calm: clamp(s.calm * 10),
    romantic: clamp(((s.inLove * 2 + s.outOfLove * 0.5) / 2.5) * 10),
    lonely: clamp(s.alone * 10),
    dark: clamp(((s.sad + s.outOfLove) / 2) * 10),
    nostalgic: clamp(((s.calm + s.sad) / 2) * 10),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type')
      .end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).set(CORS).json({ error: 'Method not allowed. Use GET or POST.' });
  }

  // Support both GET (query params) and POST (JSON body)
  const title = (req.method === 'GET' ? req.query.title : req.body?.title) as string | undefined;
  const artist = (req.method === 'GET' ? req.query.artist : req.body?.artist) as string | undefined;
  const album = (req.method === 'GET' ? req.query.album : req.body?.album) as string | undefined;
  const year = (req.method === 'GET' ? req.query.year : req.body?.year) as string | undefined;

  if (!title || !artist) {
    return res.status(400).set(CORS).json({
      error: 'Missing required fields: title, artist',
      usage: {
        POST: { body: { title: 'string (required)', artist: 'string (required)', album: 'string (optional)', year: 'string (optional)' } },
        GET: '/api/song?title=Song+Name&artist=Artist+Name&album=Album+Name',
      },
    });
  }

  const prompt = `You are a music analysis AI. Generate a JSON analysis for this song:

Title: ${title}
Artist: ${artist}
Album: ${album || 'Unknown'}
Year: ${year || 'Unknown'}

Return ONLY valid JSON with this exact structure:
{
  "intro": "One punchy sentence capturing the song's essence (max 12 words)",
  "gist": "2-3 sentences describing the emotional core and what the song is about",
  "lyricsAnalysis": "Deep analysis: cover verse/chorus/bridge structure, emotional journey, what life situation it fits, and who relates. 3-5 sentences.",
  "tags": ["5-8 lowercase tags like love, indie-pop, heartbreak"],
  "stats": {
    "happy": 5,
    "sad": 3,
    "hype": 2,
    "calm": 6,
    "alone": 2,
    "inLove": 7,
    "outOfLove": 1
  }
}

Stats are integers 0-10. Rate each honestly:
- happy: joy, positivity, uplift
- sad: melancholy, grief, heartache
- hype: energy, excitement, intensity
- calm: peacefulness, serenity, slowness
- alone: loneliness, isolation, solitude
- inLove: romance, affection, longing
- outOfLove: heartbreak, loss of love, moving on`;

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024,
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const raw = JSON.parse(completion.choices[0]?.message?.content ?? '{}');

    const artUrl = await fetchAlbumArt(title, artist, album || '');

    const response = {
      title,
      artist,
      album: album || null,
      year: year ? parseInt(year) : null,
      artUrl,
      intro: raw.intro,
      gist: raw.gist,
      lyricsAnalysis: raw.lyricsAnalysis,
      tags: raw.tags,
      stats: migrateStats(raw.stats),
      rawStats: raw.stats,
    };

    return res.status(200).set(CORS).json(response);
  } catch (err) {
    console.error('song api error:', err);
    return res.status(500).set(CORS).json({ error: 'Failed to generate analysis' });
  }
}
