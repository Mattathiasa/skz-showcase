import { useState } from 'react';
import { type Song, EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';

interface Props {
  song: Song;
  onClick: () => void;
}

function getDominant(stats: Song['stats']): [string, number] {
  return Object.entries(stats).reduce((a, b) => b[1] > a[1] ? b : a) as [string, number];
}

export default function SongCard({ song, onClick }: Props) {
  const [hovered, setHovered] = useState(false);
  const [dominantKey, dominantVal] = getDominant(song.stats);
  const color = EMOTION_COLORS[dominantKey];

  const bars = Object.entries(song.stats).slice(0, 4);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full text-left rounded-2xl p-5 transition-all duration-200 group relative overflow-hidden"
      style={{
        background: hovered ? '#1c1c2e' : '#141420',
        border: `1px solid ${hovered ? color + '50' : '#ffffff0d'}`,
        boxShadow: hovered ? `0 0 24px ${color}20` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {/* Glow accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-200"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-white truncate leading-snug">{song.title}</h3>
          <p className="text-xs mt-0.5 truncate" style={{ color: '#6b7280' }}>{song.artist}</p>
          <p className="text-xs truncate" style={{ color: '#4b5563' }}>{song.album} · {song.year}</p>
        </div>
        <span
          className="shrink-0 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: color + '22', color }}
        >
          {EMOTION_LABELS[dominantKey]} {dominantVal}/10
        </span>
      </div>

      <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: '#9ca3af' }}>
        {song.gist}
      </p>

      {/* Mini vibe bars */}
      <div className="flex gap-1 items-end h-8">
        {bars.map(([key, val]) => (
          <div key={key} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full rounded-sm" style={{
              height: `${(val / 10) * 28}px`,
              background: EMOTION_COLORS[key] + '90',
              minHeight: 2,
            }} />
          </div>
        ))}
        <div className="flex-1" />
        <div className="flex-1" />
        <div className="flex-1" />
      </div>

      <div className="flex flex-wrap gap-1 mt-3">
        {song.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#ffffff08', color: '#6b7280' }}>
            #{tag}
          </span>
        ))}
      </div>
    </button>
  );
}
