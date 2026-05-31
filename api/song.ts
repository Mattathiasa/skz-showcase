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

const SYSTEM = `You are the music analyst behind Vibe Showcase — a personal music discovery app. Your writing is cinematic, specific, and emotionally precise. You never use generic music-review language ("haunting," "catchy," "infectious"). You write about songs as emotional experiences and psychological maps. Your analyses reference concrete song structure (intro, verse, chorus, bridge) and describe what each section *does* — what argument it makes, what feeling it plants, how it shifts.`;

function buildPrompt(title: string, artist: string, album: string, year: string) {
  return `Analyze this song and return ONLY valid JSON — no markdown, no explanation:

Title: ${title}
Artist: ${artist}
Album: ${album || 'Unknown'}
Year: ${year || 'Unknown'}

Return this exact JSON structure:

{
  "intro": "A single cinematic sentence that primes the listener before they press play. Should feel like the first line of a film — specific, atmospheric, not a generic description. 15–25 words.",
  "gist": "2–3 sentences describing the song's emotional core and real-world subject. What is the song actually about? What feeling does it generate and why? Be specific, not vague.",
  "lyricsAnalysis": "Structured paragraph following this exact pattern: (1) One sentence about the production/sonic opening — what the intro *does* before any lyric arrives. (2) What verse 1 maps or argues — the emotional or conceptual position it establishes. (3) What the chorus reveals or commits to — often a reversal, a naming, or a physical commitment. (4) What the bridge does — release, tightening, or contradiction. (5) One sentence beginning 'Listen to this when...' — a specific situational context. (6) One sentence beginning 'Who relates:' — a vivid, specific persona, not a generic demographic. Total: 5–7 sentences. Be concrete and structural, not impressionistic.",
  "tags": ["6–8 lowercase hyphenated tags — genre, mood, theme, texture. Examples: indie-pop, 3am, late-night, self-doubt, driving, cathartic, lo-fi, breakup"],
  "subcategories": ["zero or more from this exact list only: heartbreak, new-love, friendship, self-growth, party, nostalgia, anxiety, empowerment"],
  "stats": {
    "happy": 0,
    "sad": 0,
    "energetic": 0,
    "calm": 0,
    "romantic": 0,
    "lonely": 0,
    "dark": 0,
    "nostalgic": 0,
    "acousticness": 0,
    "vocalPresence": 0,
    "danceability": 0
  }
}

Stats are integers 0–100. Score each axis independently and honestly — most songs will score high on only 2–4 axes. Do not cluster everything around 50.

Emotional axes (what the song makes you feel):
- happy: pure joy, lightness, optimism — not "good" but specifically joyful
- sad: grief, ache, melancholy — emotional weight and pain
- energetic: sonic and kinetic intensity — loud, driven, urgent
- calm: active serenity, slowness, peace — not the absence of energy but chosen stillness
- romantic: love, longing, affection — both sweet and aching
- lonely: isolation, disconnection, existential solitude
- dark: shadow, menace, lyrical bleakness — sonic or thematic darkness
- nostalgic: bittersweet backward gaze — memory, loss of time, what was

Production axes (how the song is built):
- acousticness: how stripped and organic the production is (100 = just voice and guitar, 0 = fully synthetic)
- vocalPresence: how much the vocal performance carries the song vs. the production (100 = vocals are everything)
- danceability: rhythmic pull, groove, desire to move — not just tempo but feel

Example of strong lyricsAnalysis:
"The production drops before the first word — a descending synth that lands the listener inside the feeling before any explanation. Verse 1 maps the specific psychology of staying in something you know is wrong: not trapped, but choosing floors you already know. The chorus names the loop directly rather than describing it, which is the only honest move available. The bridge is the pause between knowing and doing — not a release but a held breath. Listen to this when you're finally far enough from something to name what it actually was. Who relates: anyone who has confused intensity with meaning, who stayed in a relationship or habit past the point of return and understands it more clearly in the rearview."`;
}

function setCORS(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return res;
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
    return setCORS(res).status(405).json({ error: 'Method not allowed. Use GET or POST.' });
  }

  // Support both GET (query params) and POST (JSON body)
  const title = (req.method === 'GET' ? req.query.title : req.body?.title) as string | undefined;
  const artist = (req.method === 'GET' ? req.query.artist : req.body?.artist) as string | undefined;
  const album = (req.method === 'GET' ? req.query.album : req.body?.album) as string | undefined;
  const year = (req.method === 'GET' ? req.query.year : req.body?.year) as string | undefined;

  if (!title || !artist) {
    return setCORS(res).status(400).json({
      error: 'Missing required fields: title, artist',
      usage: {
        POST: { body: { title: 'string (required)', artist: 'string (required)', album: 'string (optional)', year: 'string (optional)' } },
        GET: '/api/song?title=Song+Name&artist=Artist+Name&album=Album+Name',
      },
    });
  }

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: buildPrompt(title, artist, album || '', year || '') },
      ],
      max_tokens: 2048,
      temperature: 0.6,
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
      subcategories: raw.subcategories ?? [],
      stats: raw.stats,
    };

    return setCORS(res).status(200).json(response);
  } catch (err) {
    console.error('song api error:', err);
    return setCORS(res).status(500).json({ error: 'Failed to generate analysis' });
  }
}
