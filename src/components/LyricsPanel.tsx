import { useState } from 'react';
import { Music2 } from 'lucide-react';
import { useLyrics } from '../hooks/useLyrics';

type Mode = 'original' | 'romanized' | 'english';

const TABS: { key: Mode; label: string }[] = [
  { key: 'original', label: 'Original' },
  { key: 'romanized', label: 'Romanized' },
  { key: 'english', label: 'English' },
];

interface Props {
  title: string;
  artist: string;
  accentColor?: string;
}

export default function LyricsPanel({ title, artist, accentColor = '#a78bfa' }: Props) {
  const { lyrics, loading } = useLyrics(title, artist);
  const [mode, setMode] = useState<Mode>('original');

  const lines = lyrics?.[mode] ?? [];
  const hasAny = lyrics && (lyrics.original.length || lyrics.romanized.length || lyrics.english.length);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
      {/* Header */}
      <div className="px-6 pt-5 pb-4 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderBottom: '1px solid #ffffff08' }}>
        <div className="flex items-center gap-2">
          <Music2 size={14} style={{ color: accentColor }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6b7280' }}>
            Lyrics
          </span>
        </div>

        {/* Mode tabs */}
        <div className="flex gap-1">
          {TABS.map(tab => {
            const hasContent = lyrics?.[tab.key]?.length;
            const active = mode === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setMode(tab.key)}
                disabled={!hasContent && !loading}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  background: active && hasContent ? accentColor + '25' : '#ffffff08',
                  border: `1px solid ${active && hasContent ? accentColor + '50' : 'transparent'}`,
                  color: active && hasContent ? accentColor : hasContent ? '#6b7280' : '#374151',
                  cursor: !hasContent && !loading ? 'not-allowed' : 'pointer',
                  opacity: !hasContent && !loading ? 0.4 : 1,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5" style={{ maxHeight: 420, overflowY: 'auto' }}>
        {loading ? (
          <div className="flex flex-col gap-2.5 py-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 rounded"
                style={{
                  background: '#ffffff08',
                  width: `${55 + (i % 3) * 15}%`,
                  animation: 'pulse 1.5s ease-in-out infinite',
                  animationDelay: `${i * 0.1}s`,
                }} />
            ))}
          </div>
        ) : !hasAny ? (
          <div className="py-8 text-center">
            <Music2 size={28} className="mx-auto mb-3 opacity-20" style={{ color: accentColor }} />
            <p className="text-sm" style={{ color: '#4b5563' }}>No lyrics found</p>
          </div>
        ) : !lines.length ? (
          <div className="py-8 text-center">
            <p className="text-sm" style={{ color: '#4b5563' }}>
              {mode === 'romanized' ? 'No romanized lyrics available' : 'No English translation available'}
            </p>
            <p className="text-xs mt-1" style={{ color: '#374151' }}>
              Switch to Original to read the lyrics
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-0.5">
            {lines.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed py-0.5"
                style={{
                  color: line ? '#d1d5db' : 'transparent',
                  borderBottom: line ? 'none' : 'none',
                  minHeight: line ? 'auto' : '0.75rem',
                  fontFamily: mode === 'original' ? 'inherit' : 'inherit',
                  lineHeight: 1.75,
                }}
              >
                {line || '\u00A0'}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
