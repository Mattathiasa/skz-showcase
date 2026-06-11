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
  play: (song: Song, url: string | null) => void;
  togglePlay: () => void;
  stop: () => void;
  seek: (pct: number) => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

let ytApiPromise: Promise<void> | null = null;
function loadYoutubeApi(): Promise<void> {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise<void>((resolve) => {
    if ((window as any).YT && (window as any).YT.Player) {
      resolve();
      return;
    }
    const previousCallback = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      if (previousCallback) previousCallback();
      resolve();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }
  });
  return ytApiPromise;
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const [song, setSong] = useState<Song | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activePlayer, setActivePlayer] = useState<'audio' | 'youtube' | null>(null);

  // Initialize HTML5 Audio
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const onTime = () => {
      if (activePlayer === 'audio') {
        setCurrentTime(audio.currentTime);
        setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
      }
    };
    const onLoad = () => {
      if (activePlayer === 'audio') {
        setDuration(audio.duration);
      }
    };
    const onEnd = () => {
      if (activePlayer === 'audio') {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      }
    };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoad);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoad);
      audio.removeEventListener('ended', onEnd);
    };
  }, [activePlayer]);

  // Poll YouTube stats when playing
  useEffect(() => {
    if (activePlayer !== 'youtube' || !playing) return;
    const interval = setInterval(() => {
      const player = ytPlayerRef.current;
      if (player && typeof player.getCurrentTime === 'function') {
        try {
          const current = player.getCurrentTime() || 0;
          const dur = player.getDuration() || 0;
          setCurrentTime(current);
          setDuration(dur);
          setProgress(dur ? (current / dur) * 100 : 0);
        } catch {
          // ignore potential frame security/loading API errors
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, [activePlayer, playing]);

  const initPlayer = () => {
    return new Promise<void>((resolve) => {
      ytPlayerRef.current = new (window as any).YT.Player('hidden-youtube-player', {
        height: '0',
        width: '0',
        videoId: '',
        playerVars: {
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
        },
        events: {
          onReady: () => {
            resolve();
          },
          onStateChange: (event: any) => {
            const state = event.data;
            if (state === 1) { // YT.PlayerState.PLAYING
              setPlaying(true);
            } else if (state === 2) { // YT.PlayerState.PAUSED
              setPlaying(false);
            } else if (state === 0) { // YT.PlayerState.ENDED
              setPlaying(false);
              setProgress(0);
              setCurrentTime(0);
            }
          }
        }
      });
    });
  };

  const play = useCallback(async (newSong: Song, url: string | null) => {
    // Stop and clear HTML5 audio
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = '';
    }

    setSong(newSong);
    setPreviewUrl(url);
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);

    if (newSong.youtubeId) {
      setActivePlayer('youtube');
      try {
        await loadYoutubeApi();
        if (!ytPlayerRef.current) {
          await initPlayer();
        }
        const player = ytPlayerRef.current;
        if (player) {
          player.loadVideoById(newSong.youtubeId);
          player.playVideo();
          setPlaying(true);
        }
      } catch (err) {
        console.error('Failed to load YouTube player:', err);
      }
    } else if (url) {
      setActivePlayer('audio');
      if (audio) {
        audio.src = url;
        audio.currentTime = 0;
        audio.play().catch(() => {});
        setPlaying(true);
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (activePlayer === 'youtube') {
      const player = ytPlayerRef.current;
      if (player && typeof player.playVideo === 'function') {
        if (playing) {
          player.pauseVideo();
          setPlaying(false);
        } else {
          player.playVideo();
          setPlaying(true);
        }
      }
    } else {
      const audio = audioRef.current;
      if (!audio) return;
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.play().catch(() => {});
        setPlaying(true);
      }
    }
  }, [activePlayer, playing]);

  const stop = useCallback(() => {
    if (activePlayer === 'youtube') {
      const player = ytPlayerRef.current;
      if (player && typeof player.stopVideo === 'function') {
        player.stopVideo();
      }
    } else {
      audioRef.current?.pause();
    }
    setPlaying(false);
    setSong(null);
    setActivePlayer(null);
  }, [activePlayer]);

  const seek = useCallback((pct: number) => {
    if (activePlayer === 'youtube') {
      const player = ytPlayerRef.current;
      if (player && typeof player.getDuration === 'function') {
        const dur = player.getDuration();
        if (dur) {
          const target = (pct / 100) * dur;
          player.seekTo(target, true);
          setCurrentTime(target);
          setProgress(pct);
        }
      }
    } else {
      const audio = audioRef.current;
      if (!audio || !audio.duration) return;
      audio.currentTime = (pct / 100) * audio.duration;
    }
  }, [activePlayer]);

  return (
    <PlayerContext.Provider value={{ song, playing, progress, currentTime, duration, previewUrl, play, togglePlay, stop, seek }}>
      {children}
      <div id="hidden-youtube-player" style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }} />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
