import { ArrowLeft, Music, BookOpen, Lightbulb, Tag } from 'lucide-react';
import { type Song, EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';
import VibeRadar from './VibeRadar';

interface Props {
  song: Song;
  onBack: () => void;
}

function getDominant(stats: Song['stats']): [string, number] {
  return Object.entries(stats).reduce((a, b) => b[1] > a[1] ? b : a) as [string, number];
}

export default function SongDetail({ song, onBack }: Props) {
  const [dominantKey] = getDominant(song.stats);
  const color = EMOTION_COLORS[dominantKey];

  const sortedStats = Object.entries(song.stats).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center gap-4 backdrop-blur-xl"
        style={{ background: 'rgba(10,10,15,0.85)', borderBottom: '1px solid #ffffff0d' }}>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: '#6b7280' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <div className="flex-1" />
        <span className="text-sm" style={{ color: '#4b5563' }}>{song.year}</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Title block */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: color + '22', border: `1px solid ${color}44` }}>
              <Music size={28} style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-black text-white leading-tight mb-1">{song.title}</h1>
              <p className="font-semibold" style={{ color }}>{song.artist}</p>
              <p className="text-sm mt-0.5" style={{ color: '#6b7280' }}>{song.album} · {song.year}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {song.tags.map(tag => (
              <span key={tag}
                className="flex items-center gap-1 text-xs px-3 py-1 rounded-full"
                style={{ background: '#ffffff08', color: '#9ca3af', border: '1px solid #ffffff0d' }}>
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="rounded-2xl p-5 mb-4"
          style={{ background: color + '0d', border: `1px solid ${color}30` }}>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={14} style={{ color }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>
              Read Before Listening
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#e5e7eb' }}>{song.intro}</p>
        </div>

        {/* Gist */}
        <div className="rounded-2xl p-5 mb-8"
          style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={14} style={{ color: '#fbbf24' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#fbbf24' }}>
              What It's About
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>{song.gist}</p>
        </div>

        {/* Vibe Radar */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: '#6b7280' }}>
            Vibe Radar
          </h2>
          <VibeRadar stats={song.stats} size={300} />
        </div>

        {/* Stat bars */}
        <div className="rounded-2xl p-6" style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#6b7280' }}>
            Emotion Breakdown
          </h2>
          <div className="flex flex-col gap-3">
            {sortedStats.map(([key, val]) => (
              <div key={key} className="flex items-center gap-3">
                <span className="w-24 text-xs font-medium shrink-0" style={{ color: EMOTION_COLORS[key] }}>
                  {EMOTION_LABELS[key]}
                </span>
                <div className="flex-1 h-2 rounded-full" style={{ background: '#ffffff08' }}>
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${val * 10}%`, background: EMOTION_COLORS[key] }}
                  />
                </div>
                <span className="w-6 text-xs text-right shrink-0" style={{ color: '#6b7280' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
