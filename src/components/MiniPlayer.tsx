import { useNavigate } from 'react-router-dom';
import { Play, Pause, X, ExternalLink } from 'lucide-react';
import { usePlayer } from '../contexts/PlayerContext';
import AlbumArt from './AlbumArt';

const GOLD = '#d4a853';

export default function MiniPlayer() {
  const { song, playing, progress, currentTime, duration, togglePlay, stop, seek } = usePlayer();

  if (!song) return null;

  const navigate = useNavigate();
  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(`${song.title} ${song.artist}`)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(7,7,11,0.97)',
        borderTop: '1px solid #d4a85328',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 -8px 40px #00000080',
      }}>

      {/* Progress bar — full width, sits at very top of player */}
      <div className="w-full h-0.5 cursor-pointer relative"
        style={{ background: '#1a1a28' }}
        onClick={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          seek(((e.clientX - rect.left) / rect.width) * 100);
        }}>
        <div className="h-0.5 transition-all"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${GOLD}88, ${GOLD})`,
            boxShadow: `0 0 6px ${GOLD}60`,
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">

        {/* Album art — clickable to go to song */}
        <button onClick={() => navigate(`/song/${song.id}`)} className="shrink-0">
          <AlbumArt title={song.title} album={song.album} artist={song.artist} size={40} accentColor={GOLD} />
        </button>

        {/* Song info */}
        <button onClick={() => navigate(`/song/${song.id}`)} className="flex-1 min-w-0 text-left">
          <p className="text-sm font-bold truncate" style={{ color: '#f0ead8' }}>{song.title}</p>
          <p className="text-xs truncate" style={{ color: '#5a4f3a' }}>{song.artist}</p>
        </button>

        {/* Time */}
        <span className="text-xs shrink-0 hidden sm:block" style={{ color: '#3a3020' }}>
          {fmt(currentTime)} / {duration ? fmt(duration) : '0:30'}
        </span>

        {/* Play/Pause */}
        <button onClick={togglePlay}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{ background: `linear-gradient(135deg, ${GOLD}28, ${GOLD}15)`, border: `1px solid ${GOLD}40`, boxShadow: playing ? `0 0 14px ${GOLD}40` : 'none' }}
          onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(135deg,${GOLD}45,${GOLD}28)`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg,${GOLD}28,${GOLD}15)`; }}>
          {playing
            ? <Pause size={13} style={{ color: GOLD }} />
            : <Play size={13} style={{ color: GOLD, marginLeft: 1 }} />}
        </button>

        {/* Spotify link */}
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-all shrink-0"
          style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
          <ExternalLink size={10} /> Spotify
        </a>

        {/* Close */}
        <button onClick={stop}
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all"
          style={{ background: '#ffffff08', color: '#5a4f3a' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
          <X size={13} />
        </button>
      </div>
    </div>
  );
}
