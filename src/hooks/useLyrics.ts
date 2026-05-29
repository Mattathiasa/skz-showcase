import { useState, useEffect } from 'react';

export interface LyricsData {
  original: string[];
  romanized: string[];
  english: string[];
}

interface LrcLibResult {
  trackName: string;
  artistName: string;
  plainLyrics: string | null;
  syncedLyrics: string | null;
  duration: number;
}

const cache = new Map<string, LyricsData | null>();
const pending = new Map<string, Promise<LyricsData | null>>();

const HANGUL = /[\uAC00-\uD7A3]/;
const JAPANESE = /[\u3040-\u30FF\u4E00-\u9FFF]/;
const ONLY_LATIN = /^[a-zA-Z0-9\s\p{P}\p{S}!?.,'"()[\]{}\-:;@#$%^&*+=/<>\\|_~`\n]+$/u;

function extractLines(result: LrcLibResult): string[] {
  const src = result.syncedLyrics || result.plainLyrics || '';
  return src
    .split('\n')
    .map(line => line.replace(/^\[\d{2}:\d{2}[.:]\d{2,3}\]/, '').trim())
    .filter(Boolean);
}

function detectLang(lines: string[]): 'original' | 'romanized' | 'english' {
  const sample = lines.slice(0, 10).join(' ');
  if (HANGUL.test(sample) || JAPANESE.test(sample)) return 'original';
  if (ONLY_LATIN.test(sample)) {
    // Heuristic: romanized lines often have syllable-style spacing (e.g. "na-reul")
    // English tends to have longer common words
    const hasHyphens = (sample.match(/-/g) || []).length > 2;
    return hasHyphens ? 'romanized' : 'english';
  }
  return 'original';
}

async function fetchLyrics(title: string, artist: string): Promise<LyricsData | null> {
  try {
    const q = encodeURIComponent(`${title} ${artist}`);
    const res = await fetch(`https://lrclib.net/api/search?q=${q}`);
    if (!res.ok) return null;

    const results: LrcLibResult[] = await res.json();
    if (!results.length) return null;

    const buckets: Record<'original' | 'romanized' | 'english', string[]> = {
      original: [],
      romanized: [],
      english: [],
    };

    for (const r of results.slice(0, 8)) {
      const lines = extractLines(r);
      if (!lines.length) continue;
      const lang = detectLang(lines);
      if (!buckets[lang].length) buckets[lang] = lines;
    }

    // If we only got one version, put it in original
    if (!buckets.original.length && (buckets.romanized.length || buckets.english.length)) {
      buckets.original = buckets.romanized.length ? buckets.romanized : buckets.english;
      if (buckets.original === buckets.romanized) buckets.romanized = [];
      else buckets.english = [];
    }

    if (!buckets.original.length && !buckets.romanized.length && !buckets.english.length) {
      return null;
    }

    return buckets;
  } catch {
    return null;
  }
}

export function useLyrics(title: string, artist: string) {
  const key = `${title}||${artist}`;
  const [data, setData] = useState<LyricsData | null>(cache.get(key) ?? null);
  const [loading, setLoading] = useState(!cache.has(key));

  useEffect(() => {
    if (cache.has(key)) {
      setData(cache.get(key)!);
      setLoading(false);
      return;
    }
    let alive = true;
    const run = async () => {
      if (!pending.has(key)) pending.set(key, fetchLyrics(title, artist));
      const result = await pending.get(key)!;
      cache.set(key, result);
      if (alive) { setData(result); setLoading(false); }
    };
    run();
    return () => { alive = false; };
  }, [key, title, artist]);

  return { lyrics: data, loading };
}
