import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

async function fetchPreview(title: string, artist: string): Promise<string | null> {
  try {
    const q = encodeURIComponent(`${title} ${artist}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=10&country=us`);
    if (!res.ok) return null;
    const data = await res.json();
    const results: any[] = data.results ?? [];
    const first = results.find(r => r.previewUrl && r.artistName?.toLowerCase().includes(artist.toLowerCase().split(/\s+/)[0])) ?? results.find(r => r.previewUrl);
    return first?.previewUrl ?? null;
  } catch { return null; }
}

export function useSongPreview(title: string, artist: string) {
  const key = `${title}||${artist}`;
  const [url, setUrl] = useState<string | null>(cache.get(key) ?? null);
  const [loading, setLoading] = useState(!cache.has(key));
  useEffect(() => {
    if (cache.has(key)) { setUrl(cache.get(key)!); setLoading(false); return; }
    let alive = true;
    const run = async () => {
      if (!pending.has(key)) pending.set(key, fetchPreview(title, artist));
      const result = await pending.get(key)!;
      cache.set(key, result);
      if (alive) { setUrl(result); setLoading(false); }
    };
    run();
    return () => { alive = false; };
  }, [key, title, artist]);
  return { previewUrl: url, loading };
}
