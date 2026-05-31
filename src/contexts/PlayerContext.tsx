import { createContext, useContext, useState, useRef, useEffect, useCallback, type ReactNode } from 'react';
import type { Song } from '../data/songs';

interface PlayerState {
  song: Song | null;
  playing: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  previewUrl: string | null;
}

interface PlayerContextValue extends PlayerState {
  play: (song: Song, url: string) => void;
  togglePlay: () => void;
  stop: () => void;
  seek: (pct: number) => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [song, setSong] = useState<Song | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoad = () => setDuration(audio.duration);
    const onEnd = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoad);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoad);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const play = useCallback((newSong: Song, url: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = url;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    setSong(newSong);
    setPreviewUrl(url);
    setPlaying(true);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().catch(() => {}); setPlaying(true); }
  }, [playing]);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
    setSong(null);
  }, []);

  const seek = useCallback((pct: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = (pct / 100) * audio.duration;
  }, []);

  return (
    <PlayerContext.Provider value={{ song, playing, progress, currentTime, duration, previewUrl, play, togglePlay, stop, seek }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
