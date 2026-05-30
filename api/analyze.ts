import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const client = new Anthropic();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, artist, album, year } = req.body ?? {};
  if (!title || !artist) return res.status(400).json({ error: 'title and artist are required' });

  const prompt = `You are a music analysis AI for a personal music showcase app. Generate a complete JSON analysis for the following song:

Title: ${title}
Artist: ${artist}
Album: ${album || 'Unknown'}
Year: ${year || 'Unknown'}

Return ONLY valid JSON (no markdown, no explanation) with this exact structure:
{
  "intro": "One punchy sentence that captures the song's essence (max 12 words)",
  "gist": "2-3 sentences describing the emotional core and what the song is about",
  "lyricsAnalysis": "Deep analysis paragraph: cover the intro/verses/chorus/bridge structure, the emotional journey, what life situation it fits, and 'Who relates: [specific persona]'. Be vivid and specific, 3-5 sentences.",
  "tags": ["array", "of", "5-8", "lowercase", "tags", "like", "love", "indie-pop", "heartbreak"],
  "subcategories": ["optional array of subcategory keys if applicable: heartbreak|new-love|friendship|self-growth|party|nostalgia|anxiety|empowerment"],
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

Stats are integers 0-10. Rate each dimension honestly based on the song's actual emotional content:
- happy: joy, positivity, uplift
- sad: melancholy, grief, heartache
- hype: energy, excitement, intensity
- calm: peacefulness, serenity, slowness
- alone: loneliness, isolation, solitude
- inLove: romance, affection, longing
- outOfLove: heartbreak, loss of love, moving on`;

  try {
    const message = await client.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].type === 'text' ? message.content[0].text : '';
    const parsed = JSON.parse(text);

    res.status(200).json(parsed);
  } catch (err) {
    console.error('analyze error:', err);
    res.status(500).json({ error: 'Failed to generate analysis' });
  }
}
