import Groq from 'groq-sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM = `You are an elite music critic and data analyst for Vibe Showcase. Your specialty is deep lyrical deconstruction — you go beyond surface-level description into the psychological, structural, and thematic architecture of songs. When lyrics are provided, you analyze them line by line for metaphor density, emotional arc, linguistic patterns, and thematic coherence. Your writing is precise, academic yet accessible, and never generic. Return ONLY valid JSON — no markdown, no preamble, no explanation.`;

function buildPrompt(title: string, artist: string, lyrics: string) {
  const hasLyrics = lyrics && lyrics.trim().length > 20;
  return `Deep analysis request:

Title: ${title}
Artist: ${artist}
${hasLyrics ? `\nLyrics provided:\n${lyrics.slice(0, 4000)}` : '\n(No lyrics provided — analyze based on known information about this song)'}

Return this exact JSON structure:

{
  "lyricsAnalysis": "${hasLyrics
    ? 'Paragraph analyzing the lyrics in depth: metaphor patterns, recurring imagery, structural arc from verse to chorus to bridge, linguistic choices, emotional escalation or descent. Be specific — quote or reference actual lines.'
    : 'Paragraph analyzing the known themes, production choices, and emotional architecture of this song from your knowledge.'}",
  "emotionalBreakdown": "Paragraph mapping the emotional journey of the song — how does the listener feel at the start vs. the end? What emotional transitions occur? What is the dominant feeling and what subtle secondary emotions underlie it? Reference specific sections (intro, verse, chorus, bridge, outro).",
  "thematicAnalysis": "Paragraph identifying the core theme(s) and sub-themes. What is the song REALLY about beneath the surface narrative? What universal human experience does it tap into? What makes it resonate beyond its specific subject matter?",
  "suggestedStats": {
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
  },
  "tags": ["6–10 lowercase hyphenated tags — be precise and specific"]
}

For suggestedStats: integers 0–100. Score independently and honestly. Most songs peak on only 2–4 axes. Do not cluster around 50.

Emotional axes:
- happy: pure joy, lightness, optimism
- sad: grief, ache, melancholy
- energetic: sonic/kinetic intensity — loud, driven, urgent
- calm: serenity, slowness, chosen stillness
- romantic: love, longing, affection
- lonely: isolation, disconnection, existential solitude
- dark: shadow, menace, lyrical bleakness
- nostalgic: bittersweet backward gaze — memory, loss of time

Production axes:
- acousticness: how stripped/organic (100 = just voice+guitar, 0 = fully synthetic)
- vocalPresence: how much vocals carry vs. production (100 = vocals are everything)
- danceability: rhythmic pull, groove, desire to move`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, artist, lyrics } = req.body ?? {};
  if (!title || !artist) return res.status(400).json({ error: 'title and artist are required' });

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: buildPrompt(title, artist, lyrics ?? '') },
      ],
      max_tokens: 3000,
      temperature: 0.5,
      response_format: { type: 'json_object' },
    });

    const raw = completion.choices[0]?.message?.content ?? '{}';
    const parsed = JSON.parse(raw);
    res.status(200).json(parsed);
  } catch (err) {
    console.error('grok-analyze error:', err);
    res.status(500).json({ error: 'Analysis failed. Ensure GROQ_API_KEY is configured.' });
  }
}
