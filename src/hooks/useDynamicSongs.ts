import { useState, useCallback } from 'react';
import type { Song } from '../data/songs';

const STORAGE_KEY = 'vibe_showcase_dynamic_songs';

function load(): Song[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(songs: Song[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

export function useDynamicSongs() {
  const [dynamicSongs, setDynamicSongs] = useState<Song[]>(load);

  const addSong = useCallback((song: Song) => {
    setDynamicSongs(prev => {
      const next = [song, ...prev.filter(s => s.id !== song.id)];
      save(next);
      return next;
    });
  }, []);

  const removeSong = useCallback((id: string) => {
    setDynamicSongs(prev => {
      const next = prev.filter(s => s.id !== id);
      save(next);
      return next;
    });
  }, []);

  return { dynamicSongs, addSong, removeSong };
}
