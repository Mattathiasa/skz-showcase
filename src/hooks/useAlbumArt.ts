import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

async function fetchArt(album: string, artist: string): Promise<string | null> {
  const query = encodeURIComponent(`${artist} ${album}`);
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&entity=album&limit=5&country=us`
    );
    const data = await res.json();
    const result = data?.results?.[0];
    if (!result?.artworkUrl100) return null;
    return result.artworkUrl100.replace('100x100bb', '600x600bb');
  } catch {
    return null;
  }
}

export function useAlbumArt(album: string, artist: string): { artUrl: string | null; loading: boolean } {
  const key = `${artist}||${album}`;
  const [artUrl, setArtUrl] = useState<string | null>(cache.get(key) ?? null);
  const [loading, setLoading] = useState(!cache.has(key));

  useEffect(() => {
    if (cache.has(key)) {
      setArtUrl(cache.get(key)!);
      setLoading(false);
      return;
    }

    let alive = true;
    const run = async () => {
      if (!pending.has(key)) {
        pending.set(key, fetchArt(album, artist));
      }
      const url = await pending.get(key)!;
      cache.set(key, url);
      if (alive) { setArtUrl(url); setLoading(false); }
    };
    run();
    return () => { alive = false; };
  }, [key, album, artist]);

  return { artUrl, loading };
}
