import Groq from 'groq-sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, artist, album, year } = req.body ?? {};
  if (!title || !artist) return res.status(400).json({ error: 'title and artist are required' });

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: buildPrompt(title, artist, album ?? '', year ?? '') },
      ],
      max_tokens: 2048,
      temperature: 0.6,
      response_format: { type: 'json_object' },
    });

    const parsed = JSON.parse(completion.choices[0]?.message?.content ?? '{}');
    res.status(200).json(parsed);
  } catch (err) {
    console.error('analyze error:', err);
    res.status(500).json({ error: 'Failed to generate analysis' });
  }
}
