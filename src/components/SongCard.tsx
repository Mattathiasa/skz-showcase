import { useState } from 'react';
import { type Song, EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES, SUBCATEGORY_LABELS, SUBCATEGORY_COLORS } from '../data/songs';
import AlbumArt from './AlbumArt';

interface Props { song: Song; onClick: () => void; }

function getDominant(stats: Song['stats']): [string, number] {
  return EMOTIONAL_AXES
    .map(k => [k, stats[k as keyof typeof stats]] as [string, number])
    .reduce((a, b) => b[1] > a[1] ? b : a);
}

export default function SongCard({ song, onClick }: Props) {
  const [hovered, setHovered] = useState(false);
  const [dominantKey, dominantVal] = getDominant(song.stats);
  const color = EMOTION_COLORS[dominantKey];
  const bars = EMOTIONAL_AXES.slice(0, 5).map(k => [k, song.stats[k as keyof typeof song.stats]] as [string, number]);

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
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-200"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: hovered ? 1 : 0 }} />

      <div className="flex items-start gap-3 mb-3">
        <AlbumArt album={song.album} artist={song.artist} size={52} accentColor={color} />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-white truncate leading-snug">{song.title}</h3>
          <p className="text-xs mt-0.5 truncate" style={{ color: '#6b7280' }}>{song.artist}</p>
          <p className="text-xs truncate" style={{ color: '#4b5563' }}>{song.album} · {song.year}</p>
        </div>
        <span className="shrink-0 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: color + '22', color }}>
          {EMOTION_LABELS[dominantKey]} {dominantVal}%
        </span>
      </div>

      <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: '#9ca3af' }}>{song.gist}</p>

      <div className="flex gap-1 items-end h-8">
        {bars.map(([key, val]) => (
          <div key={key} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full rounded-sm" style={{
              height: `${(val / 100) * 28}px`,
              background: EMOTION_COLORS[key] + '90',
              minHeight: 2,
            }} />
          </div>
        ))}
        <div className="flex-1" /><div className="flex-1" /><div className="flex-1" />
      </div>

      {song.subcategories && song.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {song.subcategories.slice(0, 2).map(sc => (
            <span key={sc} className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: (SUBCATEGORY_COLORS[sc] ?? '#a78bfa') + '20',
                color: SUBCATEGORY_COLORS[sc] ?? '#a78bfa',
              }}>
              {SUBCATEGORY_LABELS[sc] ?? sc}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1 mt-1.5">
        {song.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#ffffff08', color: '#6b7280' }}>
            #{tag}
          </span>
        ))}
      </div>
    </button>
  );
}
