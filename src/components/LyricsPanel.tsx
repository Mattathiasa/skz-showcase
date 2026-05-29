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

export default function LyricsPanel({ title, artist, accentColor = '#d4a853' }: Props) {
  const { lyrics, loading } = useLyrics(title, artist);
  const [mode, setMode] = useState<Mode>('original');

  const lines = lyrics?.[mode] ?? [];
  const hasAny = lyrics && (lyrics.original.length || lyrics.romanized.length || lyrics.english.length);

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0e0e18, #0b0b14)',
        border: '1px solid #d4a85320',
      }}>
      {/* Header */}
      <div className="px-6 pt-5 pb-4 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderBottom: '1px solid #d4a85315' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: accentColor + '18', border: `1px solid ${accentColor}30` }}>
            <Music2 size={11} style={{ color: accentColor }} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>
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
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: active && hasContent ? accentColor + '22' : '#ffffff08',
                  border: `1px solid ${active && hasContent ? accentColor + '45' : 'transparent'}`,
                  color: active && hasContent ? accentColor : hasContent ? '#5a4f3a' : '#2a2018',
                  cursor: !hasContent && !loading ? 'not-allowed' : 'pointer',
                  opacity: !hasContent && !loading ? 0.35 : 1,
                  boxShadow: active && hasContent ? `0 0 12px ${accentColor}20` : 'none',
                }}>
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
                  background: '#d4a85510',
                  width: `${55 + (i % 3) * 15}%`,
                  animation: 'pulse 1.5s ease-in-out infinite',
                  animationDelay: `${i * 0.1}s`,
                }} />
            ))}
          </div>
        ) : !hasAny ? (
          <div className="py-8 text-center">
            <Music2 size={28} className="mx-auto mb-3 opacity-20" style={{ color: accentColor }} />
            <p className="text-sm font-medium" style={{ color: '#3a3020' }}>No lyrics found</p>
          </div>
        ) : !lines.length ? (
          <div className="py-8 text-center">
            <p className="text-sm" style={{ color: '#3a3020' }}>
              {mode === 'romanized' ? 'No romanized lyrics available' : 'No English translation available'}
            </p>
            <p className="text-xs mt-1" style={{ color: '#2a2018' }}>Switch to Original</p>
          </div>
        ) : (
          <div className="flex flex-col gap-0.5">
            {lines.map((line, i) => (
              <p key={i}
                className="text-sm py-0.5"
                style={{
                  color: line ? '#8a7860' : 'transparent',
                  minHeight: line ? 'auto' : '0.75rem',
                  lineHeight: 1.8,
                  letterSpacing: mode === 'original' ? '0.01em' : undefined,
                }}>
                {line || '\u00A0'}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
