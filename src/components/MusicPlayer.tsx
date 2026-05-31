import { useEffect } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { useSongPreview } from '../hooks/useSongPreview';
import { usePlayer } from '../contexts/PlayerContext';
import type { Song } from '../data/songs';

interface Props {
  song: Song;
  accentColor?: string;
}

export default function MusicPlayer({ song, accentColor = '#d4a853' }: Props) {
  const { previewUrl, loading } = useSongPreview(song.title, song.artist);
  const { play, togglePlay, playing, progress, currentTime, duration, song: activeSong, seek } = usePlayer();

  const isActive = activeSong?.id === song.id;
  const isPlaying = isActive && playing;

  useEffect(() => {
    if (previewUrl && isActive) {
      // already loaded in context
    }
  }, [previewUrl, isActive]);

  const handlePlay = () => {
    if (isActive) {
      togglePlay();
    } else if (previewUrl) {
      play(song, previewUrl);
    }
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  const ytUrl = `https://music.youtube.com/search?q=${encodeURIComponent(song.title + ' ' + song.artist)}`;
  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(song.title + ' ' + song.artist)}`;

  const externalLinks = (
    <div className="flex gap-2">
      {[{ href: ytUrl, label: 'YouTube Music' }, { href: spotifyUrl, label: 'Spotify' }].map(l => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all font-medium"
          style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; e.currentTarget.style.background = '#ffffff12'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
          <ExternalLink size={10} /> {l.label}
        </a>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg,#0e0e18,#0b0b14)', border: '1px solid #d4a85320' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full shrink-0" style={{ background: '#d4a85315', animation: 'pulse 1.5s ease-in-out infinite' }} />
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
      <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg,#0e0e18,#0b0b14)', border: '1px solid #1e1e2e' }}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-xs font-medium" style={{ color: '#3a3020' }}>No preview available</p>
          {externalLinks}
        </div>
      </div>
    );
  }

  const displayProgress = isActive ? progress : 0;
  const displayTime = isActive ? currentTime : 0;
  const displayDuration = isActive ? duration : 0;

  return (
    <div className="rounded-2xl p-4"
      style={{ background: 'linear-gradient(135deg,#0e0e18,#0b0b14)', border: `1px solid ${accentColor}30`, boxShadow: `0 0 24px ${accentColor}08` }}>

      <div className="flex items-center gap-3 mb-3">
        <button onClick={handlePlay}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{ background: `linear-gradient(135deg,${accentColor}28,${accentColor}15)`, border: `1px solid ${accentColor}40`, boxShadow: isPlaying ? `0 0 16px ${accentColor}40` : 'none' }}
          onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(135deg,${accentColor}45,${accentColor}28)`; e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}50`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg,${accentColor}28,${accentColor}15)`; e.currentTarget.style.boxShadow = isPlaying ? `0 0 16px ${accentColor}40` : 'none'; }}>
          {isPlaying ? <Pause size={14} style={{ color: accentColor }} /> : <Play size={14} style={{ color: accentColor, marginLeft: 2 }} />}
        </button>

        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-1.5 rounded-full cursor-pointer relative overflow-hidden"
            style={{ background: '#1a1a28' }}
            onClick={e => {
              if (!isActive) { handlePlay(); return; }
              const rect = e.currentTarget.getBoundingClientRect();
              seek(((e.clientX - rect.left) / rect.width) * 100);
            }}>
            <div className="h-1.5 rounded-full transition-all"
              style={{ width: `${displayProgress}%`, background: `linear-gradient(90deg,${accentColor}88,${accentColor})`, boxShadow: `0 0 6px ${accentColor}60` }} />
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium" style={{ color: accentColor, opacity: 0.7 }}>{fmt(displayTime)}</span>
            <span className="text-xs" style={{ color: '#2a2018' }}>30-sec preview</span>
            <span className="text-xs font-medium" style={{ color: '#3a3020' }}>{displayDuration ? fmt(displayDuration) : '0:30'}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-end">{externalLinks}</div>
    </div>
  );
}
