import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { useSongPreview } from '../hooks/useSongPreview';

interface Props {
  title: string;
  artist: string;
  accentColor?: string;
}

export default function MusicPlayer({ title, artist, accentColor = '#a78bfa' }: Props) {
  const { previewUrl, loading } = useSongPreview(title, artist);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [previewUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnded);
    };
  }, [previewUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const ytUrl = `https://music.youtube.com/search?q=${encodeURIComponent(title + ' ' + artist)}`;
  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(title + ' ' + artist)}`;

  if (loading) {
    return (
      <div className="rounded-2xl p-4" style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full" style={{ background: '#ffffff08', animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-2 rounded-full" style={{ background: '#ffffff08', width: '60%', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div className="h-1.5 rounded-full" style={{ background: '#ffffff06', animation: 'pulse 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!previewUrl) {
    return (
      <div className="rounded-2xl p-4" style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#4b5563' }}>No preview available</p>
          <div className="flex gap-2">
            <a href={ytUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ background: '#ffffff08', color: '#9ca3af' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#ffffff15'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = '#ffffff08'; }}>
              <ExternalLink size={11} /> YouTube Music
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ background: '#ffffff08', color: '#9ca3af' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#ffffff15'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = '#ffffff08'; }}>
              <ExternalLink size={11} /> Spotify
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4" style={{ background: '#141420', border: `1px solid ${accentColor}20` }}>
      <audio ref={audioRef} src={previewUrl} preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{ background: accentColor + '30', border: `1px solid ${accentColor}50` }}
          onMouseEnter={e => (e.currentTarget.style.background = accentColor + '50')}
          onMouseLeave={e => (e.currentTarget.style.background = accentColor + '30')}
        >
          {playing
            ? <Pause size={14} style={{ color: accentColor }} />
            : <Play size={14} style={{ color: accentColor, marginLeft: 2 }} />
          }
        </button>

        <div className="flex-1 flex flex-col gap-1.5">
          <div
            className="h-1.5 rounded-full cursor-pointer relative"
            style={{ background: '#ffffff10' }}
            onClick={handleSeek}
          >
            <div
              className="h-1.5 rounded-full transition-all"
              style={{ width: `${progress}%`, background: accentColor }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-xs" style={{ color: '#4b5563' }}>{fmt(currentTime)}</span>
            <span className="text-xs" style={{ color: '#374151' }}>30-sec preview · Apple Music</span>
            <span className="text-xs" style={{ color: '#4b5563' }}>{duration ? fmt(duration) : '0:30'}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <a href={ytUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{ background: '#ffffff08', color: '#9ca3af' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#ffffff15'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = '#ffffff08'; }}>
          <ExternalLink size={11} /> YouTube Music
        </a>
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{ background: '#ffffff08', color: '#9ca3af' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#ffffff15'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = '#ffffff08'; }}>
          <ExternalLink size={11} /> Spotify
        </a>
      </div>
    </div>
  );
}
