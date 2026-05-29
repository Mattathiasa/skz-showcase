import { useState, useEffect } from 'react';

const cache = new Map<string, string | null>();
const pending = new Map<string, Promise<string | null>>();

async function fetchArt(album: string): Promise<string | null> {
  const query = encodeURIComponent(`Stray Kids ${album}`);
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

export function useAlbumArt(album: string): { artUrl: string | null; loading: boolean } {
  const [artUrl, setArtUrl] = useState<string | null>(cache.get(album) ?? null);
  const [loading, setLoading] = useState(!cache.has(album));

  useEffect(() => {
    if (cache.has(album)) {
      setArtUrl(cache.get(album)!);
      setLoading(false);
      return;
    }

    let alive = true;
    const run = async () => {
      if (!pending.has(album)) {
        pending.set(album, fetchArt(album));
      }
      const url = await pending.get(album)!;
      cache.set(album, url);
      if (alive) { setArtUrl(url); setLoading(false); }
    };
    run();
    return () => { alive = false; };
  }, [album]);

  return { artUrl, loading };
}
