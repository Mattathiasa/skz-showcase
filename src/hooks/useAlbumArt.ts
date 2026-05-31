import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

async function fetchArt(title: string, artist: string, album: string): Promise<string | null> {
  try {
    const params = new URLSearchParams({ title, artist, album });
    const res = await fetch(`/api/album-art?${params}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data?.url ?? null;
  } catch { return null; }
}

export function useAlbumArt(title: string, artist: string, album: string): { artUrl: string | null; loading: boolean } {
  const key = `${artist}||${album}||${title}`;
  const [artUrl, setArtUrl] = useState<string | null>(cache.get(key) ?? null);
  const [loading, setLoading] = useState(!cache.has(key) && !!(title.trim() && artist.trim()));

  useEffect(() => {
    if (!title.trim() || !artist.trim()) { setLoading(false); return; }
    if (cache.has(key)) { setArtUrl(cache.get(key) ?? null); setLoading(false); return; }

    let alive = true;
    if (!pending.has(key)) pending.set(key, fetchArt(title, artist, album));
    pending.get(key)!.then(url => {
      cache.set(key, url);
      if (alive) { setArtUrl(url); setLoading(false); }
    });
    return () => { alive = false; };
  }, [key, title, artist, album]);

  return { artUrl, loading };
}
