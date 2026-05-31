import { useState } from 'react';
import { type Song, EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES, SUBCATEGORY_LABELS, SUBCATEGORY_COLORS } from '../data/songs';
import AlbumArt from './AlbumArt';

const GOLD = '#d4a853';

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
      className="w-full text-left rounded-2xl transition-all duration-250 relative overflow-hidden"
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #131320, #0f0f1c)'
          : 'linear-gradient(135deg, #0e0e18, #0b0b14)',
        border: `1px solid ${hovered ? '#d4a85335' : '#1e1e2e'}`,
        boxShadow: hovered
          ? `0 8px 32px #00000060, 0 0 0 1px #d4a85318, 0 0 24px ${color}12`
          : '0 2px 8px #00000040',
        transform: hovered ? 'translateY(-3px)' : 'none',
        padding: '1.25rem',
      }}
    >
      {/* Gold top edge on hover */}
      <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-250"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}60, transparent)`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Dominant color ambient glow */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none transition-opacity duration-250"
        style={{
          background: `radial-gradient(circle at top right, ${color}08, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Header row */}
      <div className="flex items-start gap-3 mb-3">
        <AlbumArt title={song.title} album={song.album} artist={song.artist} size={54} accentColor={GOLD} />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm leading-snug truncate" style={{ color: '#f0ead8' }}>{song.title}</h3>
          <p className="text-xs mt-0.5 truncate font-medium" style={{ color: GOLD, opacity: 0.8 }}>{song.artist}</p>
          <p className="text-xs truncate mt-0.5" style={{ color: '#3a3528' }}>{song.album} · {song.year}</p>
        </div>
        {/* Dominant emotion badge */}
        <span className="shrink-0 text-xs font-bold px-2 py-1 rounded-full"
          style={{ background: color + '18', color, border: `1px solid ${color}30` }}>
          {EMOTION_LABELS[dominantKey]} {dominantVal}%
        </span>
      </div>

      {/* Gist */}
      <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: '#4a4035' }}>{song.gist}</p>

      {/* Vibe bars */}
      <div className="flex gap-1 items-end h-7 mb-3">
        {bars.map(([key, val]) => (
          <div key={key} className="flex-1 flex flex-col items-center relative group">
            <div className="w-full rounded-sm transition-all duration-300" style={{
              height: `${Math.max(2, (val / 100) * 24)}px`,
              background: hovered
                ? `linear-gradient(to top, ${EMOTION_COLORS[key]}, ${EMOTION_COLORS[key]}88)`
                : EMOTION_COLORS[key] + '60',
              minHeight: 2,
            }} />
          </div>
        ))}
        <div className="flex-1" /><div className="flex-1" /><div className="flex-1" />
      </div>

      {/* Subcategories */}
      {song.subcategories && song.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {song.subcategories.slice(0, 2).map(sc => (
            <span key={sc} className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: (SUBCATEGORY_COLORS[sc] ?? GOLD) + '18',
                color: SUBCATEGORY_COLORS[sc] ?? GOLD,
              }}>
              {SUBCATEGORY_LABELS[sc] ?? sc}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {song.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: '#ffffff06', color: '#3a3020' }}>
            #{tag}
          </span>
        ))}
      </div>
    </button>
  );
}
