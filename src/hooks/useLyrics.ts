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

// Revised Romanization of Korean tables
const INITIALS = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const MEDIALS = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const FINALS = ['','g','kk','gs','n','nj','nh','d','l','lg','lm','lb','ls','lt','lp','lh','m','b','bs','s','ss','ng','j','ch','k','t','p','h'];

const HANGUL_START = 0xAC00;
const HANGUL_END = 0xD7A3;

function romanizeSyllable(code: number): string {
  const offset = code - HANGUL_START;
  const finalIdx = offset % 28;
  const medialIdx = Math.floor(offset / 28) % 21;
  const initialIdx = Math.floor(offset / 28 / 21);
  return INITIALS[initialIdx] + MEDIALS[medialIdx] + FINALS[finalIdx];
}

function romanizeLine(line: string): string {
  let result = '';
  for (const ch of line) {
    const code = ch.codePointAt(0)!;
    if (code >= HANGUL_START && code <= HANGUL_END) {
      result += romanizeSyllable(code);
    } else {
      result += ch;
    }
  }
  return result;
}

function romanizeLines(lines: string[]): string[] {
  return lines.map(romanizeLine);
}

async function translateBatch(lines: string[]): Promise<string[]> {
  if (!lines.length) return [];

  const results: string[] = new Array(lines.length).fill('');
  const chunks: { indices: number[]; text: string }[] = [];

  let currentIndices: number[] = [];
  let currentParts: string[] = [];
  let currentLen = 0;
  const SEP = ' \n ';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) {
      results[i] = '';
      continue;
    }
    if (currentLen + line.length + SEP.length > 400 && currentParts.length > 0) {
      chunks.push({ indices: currentIndices, text: currentParts.join(SEP) });
      currentIndices = [];
      currentParts = [];
      currentLen = 0;
    }
    currentIndices.push(i);
    currentParts.push(line);
    currentLen += line.length + SEP.length;
  }
  if (currentParts.length > 0) {
    chunks.push({ indices: currentIndices, text: currentParts.join(SEP) });
  }

  await Promise.all(chunks.map(async ({ indices, text }) => {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ko|en`;
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      const translated: string = data?.responseData?.translatedText ?? '';
      const parts = translated.split('\n').map((s: string) => s.trim());
      indices.forEach((originalIdx, partIdx) => {
        results[originalIdx] = parts[partIdx] ?? '';
      });
    } catch {
      // leave as empty
    }
  }));

  return results;
}

function extractLines(result: LrcLibResult): string[] {
  const src = result.syncedLyrics || result.plainLyrics || '';
  return src
    .split('\n')
    .map(line => line.replace(/^\[\d{2}:\d{2}[.:]\d{2,3}\]/, '').trim());
}

async function fetchLyrics(title: string, artist: string): Promise<LyricsData | null> {
  try {
    const q = encodeURIComponent(`${title} ${artist}`);
    const res = await fetch(`https://lrclib.net/api/search?q=${q}`);
    if (!res.ok) return null;

    const results: LrcLibResult[] = await res.json();
    if (!results.length) return null;

    // Pick the best result (prefer synced, longest)
    const scored = results.slice(0, 8).map(r => ({
      r,
      lines: extractLines(r),
    })).filter(x => x.lines.some(l => l.trim()));

    if (!scored.length) return null;

    scored.sort((a, b) => {
      const aSynced = a.r.syncedLyrics ? 1 : 0;
      const bSynced = b.r.syncedLyrics ? 1 : 0;
      if (bSynced !== aSynced) return bSynced - aSynced;
      return b.lines.length - a.lines.length;
    });

    const original = scored[0].lines;

    const [romanized, english] = await Promise.all([
      Promise.resolve(romanizeLines(original)),
      translateBatch(original),
    ]);

    return { original, romanized, english };
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
