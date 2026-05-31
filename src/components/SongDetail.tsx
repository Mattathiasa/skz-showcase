import { ArrowLeft, BookOpen, BookMarked, Lightbulb, Tag, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { songs, type Song, EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES, TECHNICAL_AXES, SUBCATEGORY_LABELS, SUBCATEGORY_COLORS } from '../data/songs';
import VibeRadar from './VibeRadar';
import AlbumArt from './AlbumArt';
import LyricsPanel from './LyricsPanel';
import MusicPlayer from './MusicPlayer';

function cosineSim(a: Song['stats'], b: Song['stats']): number {
  const keys = EMOTIONAL_AXES as readonly string[];
  let dot = 0, magA = 0, magB = 0;
  for (const k of keys) {
    const va = a[k as keyof typeof a] as number;
    const vb = b[k as keyof typeof b] as number;
    dot += va * vb; magA += va * va; magB += vb * vb;
  }
  return magA && magB ? dot / (Math.sqrt(magA) * Math.sqrt(magB)) : 0;
}

function getSimilar(song: Song, all: Song[], n = 5): Song[] {
  return all
    .filter(s => s.id !== song.id)
    .map(s => ({ s, score: cosineSim(song.stats, s.stats) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(x => x.s);
}

const GOLD = '#d4a853';
const GOLD_DIM = '#d4a85320';
const GOLD_BORDER = '#d4a85338';

interface Props { song: Song; onBack: () => void; }

function getDominant(stats: Song['stats']): [string, number] {
  return EMOTIONAL_AXES
    .map(k => [k, stats[k as keyof typeof stats]] as [string, number])
    .reduce((a, b) => b[1] > a[1] ? b : a);
}

export default function SongDetail({ song, onBack }: Props) {
  const navigate = useNavigate();
  const [dominantKey] = getDominant(song.stats);
  const similar = useMemo(() => getSimilar(song, songs), [song]);
  const color = EMOTION_COLORS[dominantKey];

  const sortedEmotional = [...EMOTIONAL_AXES]
    .map(k => [k, song.stats[k as keyof typeof song.stats]] as [string, number])
    .sort((a, b) => b[1] - a[1]);

  const technicalStats = TECHNICAL_AXES
    .map(k => [k, song.stats[k as keyof typeof song.stats]] as [string, number]);

  return (
    <div className="min-h-screen" style={{ background: '#07070b' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 350, borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(ellipse, ${color}0a 0%, transparent 70%)`,
      }} />

      {/* Header */}
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center gap-4"
        style={{
          background: 'rgba(7,7,11,0.92)',
          borderBottom: '1px solid #d4a85320',
          backdropFilter: 'blur(20px)',
        }}>
        <button onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold transition-all px-3 py-1.5 rounded-lg"
          style={{ color: '#5a4f3a', background: 'transparent', border: '1px solid transparent' }}
          onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.background = GOLD_DIM; e.currentTarget.style.borderColor = GOLD_BORDER; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
          <ArrowLeft size={15} /> Back
        </button>
        <div className="flex-1" />
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: GOLD_DIM, color: GOLD, border: `1px solid ${GOLD_BORDER}` }}>
          {song.year}
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 relative z-10">

        {/* Title block */}
        <div className="mb-8">
          {/* Gold rule */}
          <div className="h-px mb-6 w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />

          <div className="flex items-start gap-5">
            <div style={{ position: 'relative' }}>
              <AlbumArt title={song.title} album={song.album} artist={song.artist} size={88} accentColor={GOLD} />
              <div style={{
                position: 'absolute', inset: -2, borderRadius: 14, pointerEvents: 'none',
                background: `linear-gradient(135deg, ${GOLD}40, transparent 60%)`,
              }} />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-black leading-tight mb-1" style={{ color: '#f0ead8' }}>{song.title}</h1>
              <button onClick={() => navigate(`/artist/${encodeURIComponent(song.artist)}`)}
                className="font-bold text-base transition-all"
                style={{ color: GOLD }}
                onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none'; }}>
                {song.artist}
              </button>
              <p className="text-sm mt-1" style={{ color: '#3a3528' }}>{song.album} · {song.year}</p>
            </div>
          </div>

          {/* Subcategories */}
          {song.subcategories && song.subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {song.subcategories.map(sc => (
                <span key={sc}
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: (SUBCATEGORY_COLORS[sc] ?? GOLD) + '20',
                    color: SUBCATEGORY_COLORS[sc] ?? GOLD,
                    border: `1px solid ${(SUBCATEGORY_COLORS[sc] ?? GOLD)}38`,
                  }}>
                  {SUBCATEGORY_LABELS[sc] ?? sc}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {song.tags.map(tag => (
              <span key={tag}
                className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                style={{ background: '#ffffff06', color: '#4a4035', border: '1px solid #ffffff08' }}>
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Music Player */}
        <div className="mb-5">
          <MusicPlayer song={song} accentColor={GOLD} />
        </div>

        {/* Read Before Listening */}
        <div className="rounded-2xl p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #d4a85310, #d4a85306)',
            border: `1px solid ${GOLD_BORDER}`,
            boxShadow: `0 0 30px ${GOLD}08`,
          }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: GOLD_DIM, border: `1px solid ${GOLD_BORDER}` }}>
              <BookOpen size={12} style={{ color: GOLD }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Read Before Listening
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#c8b898' }}>{song.intro}</p>
        </div>

        {/* What It's About */}
        <div className="rounded-2xl p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #111118, #0e0e16)',
            border: '1px solid #1e1e2e',
          }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: '#fbbf2415', border: '1px solid #fbbf2430' }}>
              <Lightbulb size={12} style={{ color: '#fbbf24' }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#fbbf24' }}>
              What It's About
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#8a7860' }}>{song.gist}</p>
        </div>

        {/* Lyrics Analysis */}
        {song.lyricsAnalysis && (
          <div className="rounded-2xl p-5 mb-8"
            style={{
              background: 'linear-gradient(135deg, #0d0d1a, #0b0b16)',
              border: '1px solid #1a1a28',
            }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: color + '18', border: `1px solid ${color}30` }}>
                <BookMarked size={12} style={{ color }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
                Lyrics Analysis
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#8a7860' }}>{song.lyricsAnalysis}</p>
          </div>
        )}

        {/* Vibe Radar */}
        <div className="rounded-2xl p-6 mb-5"
          style={{
            background: 'linear-gradient(135deg, #0e0e18, #0b0b14)',
            border: '1px solid #d4a85320',
            boxShadow: '0 4px 24px #00000040',
          }}>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} style={{ color: GOLD }} />
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Vibe Radar
            </h2>
          </div>
          <VibeRadar stats={song.stats} size={300} />
        </div>

        {/* Lyrics */}
        <div className="mb-5">
          <LyricsPanel title={song.title} artist={song.artist} accentColor={GOLD} />
        </div>

        {/* Emotion Breakdown */}
        <div className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0e0e18, #0b0b14)',
            border: '1px solid #d4a85320',
          }}>
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-center gap-2"
            style={{ borderBottom: '1px solid #d4a85315' }}>
            <Sparkles size={14} style={{ color: GOLD }} />
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              Emotion Breakdown
            </h2>
          </div>

          <div className="p-6">
            {/* Emotional Profile */}
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#3a3528' }}>
              Emotional Profile
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {sortedEmotional.map(([key, val]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-24 text-xs font-semibold shrink-0" style={{ color: EMOTION_COLORS[key] }}>
                    {EMOTION_LABELS[key]}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                    <div className="h-1.5 rounded-full transition-all duration-700"
                      style={{
                        width: `${val}%`,
                        background: `linear-gradient(90deg, ${EMOTION_COLORS[key]}88, ${EMOTION_COLORS[key]})`,
                        boxShadow: `0 0 8px ${EMOTION_COLORS[key]}40`,
                      }} />
                  </div>
                  <span className="w-9 text-xs text-right shrink-0 font-semibold" style={{ color: EMOTION_COLORS[key] }}>
                    {val}%
                  </span>
                </div>
              ))}
            </div>

            {/* Production Profile */}
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#3a3528' }}>
              Production Profile
            </p>
            <div className="flex flex-col gap-3 rounded-xl p-4"
              style={{ background: '#0a0a12', border: '1px solid #1a1a28' }}>
              {technicalStats.map(([key, val]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-24 text-xs font-semibold shrink-0" style={{ color: EMOTION_COLORS[key] }}>
                    {EMOTION_LABELS[key]}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                    <div className="h-1.5 rounded-full transition-all duration-700"
                      style={{
                        width: `${val}%`,
                        background: `linear-gradient(90deg, ${EMOTION_COLORS[key]}88, ${EMOTION_COLORS[key]})`,
                      }} />
                  </div>
                  <span className="w-9 text-xs text-right shrink-0 font-semibold" style={{ color: EMOTION_COLORS[key] }}>
                    {val}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Similar songs */}
        {similar.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #d4a85320, transparent)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3a3020' }}>Songs like this</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, #d4a85320, transparent)' }} />
            </div>
            <div className="flex flex-col gap-2">
              {similar.map(s => {
                const [domKey] = getDominant(s.stats);
                const c = EMOTION_COLORS[domKey];
                return (
                  <button key={s.id} onClick={() => navigate(`/song/${s.id}`)}
                    className="flex items-center gap-3 p-3 rounded-xl text-left transition-all w-full"
                    style={{ background: '#0e0e18', border: '1px solid #1e1e2e' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a85330'; e.currentTarget.style.background = '#131320'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.background = '#0e0e18'; }}>
                    <AlbumArt title={s.title} album={s.album} artist={s.artist} size={40} accentColor={c} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: '#f0ead8' }}>{s.title}</p>
                      <p className="text-xs truncate" style={{ color: '#5a4f3a' }}>{s.artist}</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                      style={{ background: c + '18', color: c, border: `1px solid ${c}28` }}>
                      {EMOTION_LABELS[domKey]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer spacer */}
        <div className="mt-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d4a85330, transparent)' }} />
        <p className="text-center text-xs mt-4" style={{ color: '#2a2018' }}>Vibe Showcase</p>
      </div>
    </div>
  );
}
