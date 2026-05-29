import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { useSongPreview } from '../hooks/useSongPreview';

interface Props {
  title: string;
  artist: string;
  accentColor?: string;
}

export default function MusicPlayer({ title, artist, accentColor = '#d4a853' }: Props) {
  const { previewUrl, loading } = useSongPreview(title, artist);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setPlaying(false); setProgress(0); setCurrentTime(0); setDuration(0);
  }, [previewUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoad = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoad);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoad);
      audio.removeEventListener('ended', onEnd);
    };
  }, [previewUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

  const ytUrl = `https://music.youtube.com/search?q=${encodeURIComponent(title + ' ' + artist)}`;
  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(title + ' ' + artist)}`;

  const externalLinks = (
    <div className="flex gap-2">
      <a href={ytUrl} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium"
        style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; e.currentTarget.style.background = '#ffffff12'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
        <ExternalLink size={10} /> YouTube Music
      </a>
      <a href={spotifyUrl} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium"
        style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; e.currentTarget.style.background = '#ffffff12'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
        <ExternalLink size={10} /> Spotify
      </a>
    </div>
  );

  if (loading) {
    return (
      <div className="rounded-2xl p-4"
        style={{ background: 'linear-gradient(135deg,#0e0e18,#0b0b14)', border: '1px solid #d4a85320' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full shrink-0"
            style={{ background: '#d4a85315', animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-1.5 rounded-full" style={{ background: '#d4a85312', width: '55%', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div className="h-1.5 rounded-full" style={{ background: '#d4a85508', animation: 'pulse 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!previewUrl) {
    return (
      <div className="rounded-2xl p-4"
        style={{ background: 'linear-gradient(135deg,#0e0e18,#0b0b14)', border: '1px solid #1e1e2e' }}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-xs font-medium" style={{ color: '#3a3020' }}>No preview available</p>
          {externalLinks}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4"
      style={{
        background: 'linear-gradient(135deg,#0e0e18,#0b0b14)',
        border: `1px solid ${accentColor}30`,
        boxShadow: `0 0 24px ${accentColor}08`,
      }}>
      <audio ref={audioRef} src={previewUrl} preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        {/* Play button */}
        <button onClick={togglePlay}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{
            background: `linear-gradient(135deg, ${accentColor}28, ${accentColor}15)`,
            border: `1px solid ${accentColor}40`,
            boxShadow: playing ? `0 0 16px ${accentColor}40` : 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(135deg,${accentColor}45,${accentColor}28)`; e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}50`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg,${accentColor}28,${accentColor}15)`; e.currentTarget.style.boxShadow = playing ? `0 0 16px ${accentColor}40` : 'none'; }}>
          {playing
            ? <Pause size={14} style={{ color: accentColor }} />
            : <Play size={14} style={{ color: accentColor, marginLeft: 2 }} />}
        </button>

        {/* Progress */}
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-1.5 rounded-full cursor-pointer relative overflow-hidden"
            style={{ background: '#1a1a28' }}
            onClick={handleSeek}>
            <div className="h-1.5 rounded-full transition-all"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${accentColor}88, ${accentColor})`,
                boxShadow: `0 0 6px ${accentColor}60`,
              }} />
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium" style={{ color: accentColor, opacity: 0.7 }}>{fmt(currentTime)}</span>
            <span className="text-xs" style={{ color: '#2a2018' }}>30-sec preview</span>
            <span className="text-xs font-medium" style={{ color: '#3a3020' }}>{duration ? fmt(duration) : '0:30'}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        {externalLinks.props.children}
      </div>
    </div>
  );
}
