import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import { songs, type Song, EMOTIONAL_AXES, EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import AlbumArt from '../components/AlbumArt';

const GOLD = '#d4a853';

interface Step {
  question: string;
  subtitle: string;
  options: { label: string; emoji: string; weights: Partial<Record<string, number>> }[];
}

const STEPS: Step[] = [
  {
    question: "What's your emotional state right now?",
    subtitle: "Be honest — this helps us find what you actually need.",
    options: [
      { label: "Happy & light", emoji: "☀️", weights: { happy: 90, energetic: 60, calm: 40 } },
      { label: "Melancholy", emoji: "🌧", weights: { sad: 80, nostalgic: 70, calm: 50 } },
      { label: "In my feelings", emoji: "💭", weights: { lonely: 75, sad: 55, dark: 40 } },
      { label: "Fired up", emoji: "🔥", weights: { energetic: 90, happy: 50, dark: 30 } },
      { label: "Lovesick", emoji: "💘", weights: { romantic: 90, sad: 60, lonely: 50 } },
      { label: "At peace", emoji: "🌿", weights: { calm: 90, happy: 50, nostalgic: 40 } },
    ],
  },
  {
    question: "What's your energy level?",
    subtitle: "How much do you want the music to move?",
    options: [
      { label: "Full send", emoji: "⚡", weights: { energetic: 90, danceability: 80 } },
      { label: "Medium energy", emoji: "🎵", weights: { energetic: 55, calm: 45 } },
      { label: "Low & slow", emoji: "🌙", weights: { calm: 85, acousticness: 70 } },
      { label: "Somewhere in between", emoji: "🎧", weights: { energetic: 40, calm: 60 } },
    ],
  },
  {
    question: "What do you need from music right now?",
    subtitle: "The feeling you're chasing.",
    options: [
      { label: "To feel understood", emoji: "🤝", weights: { sad: 60, lonely: 50, nostalgic: 50 } },
      { label: "To escape", emoji: "🚀", weights: { happy: 70, energetic: 65, dark: 20 } },
      { label: "To heal something", emoji: "🌱", weights: { sad: 50, calm: 65, nostalgic: 60 } },
      { label: "To feel powerful", emoji: "💪", weights: { energetic: 85, dark: 50, happy: 40 } },
      { label: "To fall in love again", emoji: "💞", weights: { romantic: 90, happy: 60 } },
      { label: "To sit with the dark", emoji: "🌑", weights: { dark: 85, sad: 65, lonely: 60 } },
    ],
  },
  {
    question: "What kind of sound?",
    subtitle: "Production texture matters.",
    options: [
      { label: "Raw & acoustic", emoji: "🎸", weights: { acousticness: 90, vocalPresence: 75 } },
      { label: "Hard-hitting beats", emoji: "🥁", weights: { energetic: 80, danceability: 70, acousticness: -40 } },
      { label: "Cinematic & layered", emoji: "🎻", weights: { dark: 50, calm: 50, nostalgic: 60 } },
      { label: "Doesn't matter", emoji: "🎶", weights: {} },
    ],
  },
];

function scoreAll(songs: Song[], picks: number[][]): Song[] {
  const combined: Record<string, number> = {};
  for (let i = 0; i < picks.length; i++) {
    const step = STEPS[i];
    for (const idx of picks[i]) {
      const opt = step.options[idx];
      for (const [k, v] of Object.entries(opt.weights)) {
        combined[k] = (combined[k] ?? 0) + (v ?? 0);
      }
    }
  }
  const keys = Object.keys(combined).filter(k => combined[k] !== 0);
  if (!keys.length) return songs.slice(0, 5);

  const magQ = Math.sqrt(keys.reduce((s, k) => s + (combined[k] ?? 0) ** 2, 0));

  return [...songs]
    .map(song => {
      const statsMap = song.stats as unknown as Record<string, number>;
      let dot = 0, magS = 0;
      for (const k of keys) {
        const sv = statsMap[k] ?? 0;
        dot += (combined[k] ?? 0) * sv;
        magS += sv ** 2;
      }
      const score = magQ && magS ? dot / (magQ * Math.sqrt(magS)) : 0;
      return { song, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(x => x.song);
}

export default function VibeMatchPage() {
  const navigate = useNavigate();
  const { firebaseSongs } = useFirebaseSongs();
  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);

  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[][]>(STEPS.map(() => []));
  const [done, setDone] = useState(false);

  const currentPick = picks[step] ?? [];
  const stepDef = STEPS[step];

  const togglePick = (idx: number) => {
    setPicks(prev => {
      const cur = prev[step];
      const next = cur.includes(idx) ? cur.filter(i => i !== idx) : [...cur, idx];
      return prev.map((p, i) => i === step ? next : p);
    });
  };

  const advance = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setDone(true);
  };

  const reset = () => { setStep(0); setPicks(STEPS.map(() => [])); setDone(false); };

  const matches = useMemo(() => done ? scoreAll(allSongs, picks) : [], [done, allSongs, picks]);

  return (
    <>
      <Helmet>
        <title>Vibe Match · Vibe Showcase</title>
        <meta name="description" content="Answer 4 questions and find your perfect song match." />
      </Helmet>
      <div className="min-h-screen" style={{ background: '#07070b' }}>
        <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse, #d4a85310 0%, transparent 70%)' }} />

        {/* Header */}
        <div className="sticky top-0 z-10 px-6 py-4 flex items-center gap-4"
          style={{ background: 'rgba(7,7,11,0.92)', borderBottom: '1px solid #d4a85320', backdropFilter: 'blur(20px)' }}>
          <button onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-lg transition-all"
            style={{ color: '#5a4f3a', border: '1px solid transparent' }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.background = '#d4a85320'; e.currentTarget.style.borderColor = '#d4a85338'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
            <ArrowLeft size={15} /> Back
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <Sparkles size={14} style={{ color: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Vibe Match</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10 relative z-10">

          {!done ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-1.5 mb-10">
                {STEPS.map((_, i) => (
                  <div key={i} className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                    <div className="h-1 rounded-full transition-all duration-500"
                      style={{ width: i < step ? '100%' : i === step ? '50%' : '0%', background: GOLD }} />
                  </div>
                ))}
              </div>

              <div className="h-px mb-8 w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#5a4f3a' }}>
                Step {step + 1} of {STEPS.length}
              </p>
              <h2 className="text-3xl font-black mb-2" style={{ color: '#f0ead8' }}>{stepDef.question}</h2>
              <p className="text-sm mb-8" style={{ color: '#5a4f3a' }}>{stepDef.subtitle}</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {stepDef.options.map((opt, i) => {
                  const active = currentPick.includes(i);
                  return (
                    <button key={i} onClick={() => togglePick(i)}
                      className="p-4 rounded-2xl text-left transition-all"
                      style={{
                        background: active ? '#d4a85318' : '#0e0e18',
                        border: `1px solid ${active ? GOLD + '55' : '#1e1e2e'}`,
                        boxShadow: active ? `0 0 20px ${GOLD}18` : 'none',
                      }}
                      onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = '#d4a85330'; }}
                      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = '#1e1e2e'; }}>
                      <span className="text-2xl block mb-2">{opt.emoji}</span>
                      <span className="text-sm font-semibold" style={{ color: active ? '#f0ead8' : '#8a7860' }}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3">
                {step > 0 && (
                  <button onClick={() => setStep(s => s - 1)}
                    className="px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff10' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
                    Back
                  </button>
                )}
                <button onClick={advance}
                  disabled={currentPick.length === 0}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all"
                  style={{
                    background: currentPick.length > 0 ? '#d4a85320' : '#0e0e18',
                    color: currentPick.length > 0 ? GOLD : '#3a3020',
                    border: `1px solid ${currentPick.length > 0 ? '#d4a85445' : '#1a1a28'}`,
                    cursor: currentPick.length === 0 ? 'not-allowed' : 'pointer',
                  }}>
                  {step === STEPS.length - 1 ? 'Find My Matches' : 'Next'} <ChevronRight size={15} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="h-px mb-8 w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={18} style={{ color: GOLD }} />
                <h2 className="text-3xl font-black" style={{ color: '#f0ead8' }}>Your Vibe Matches</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: '#5a4f3a' }}>Based on your answers, these songs fit your current state.</p>

              <div className="flex flex-col gap-3 mb-8">
                {matches.map((s, i) => {
                  const dominantKey = EMOTIONAL_AXES.reduce((a, b) =>
                    s.stats[b as keyof typeof s.stats] > s.stats[a as keyof typeof s.stats] ? b : a, EMOTIONAL_AXES[0]);
                  const color = EMOTION_COLORS[dominantKey];
                  return (
                    <button key={s.id} onClick={() => navigate(`/song/${s.id}`)}
                      className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all w-full"
                      style={{ background: '#0e0e18', border: `1px solid ${i === 0 ? color + '40' : '#1e1e2e'}` }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = color + '55'; e.currentTarget.style.background = '#131320'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = i === 0 ? color + '40' : '#1e1e2e'; e.currentTarget.style.background = '#0e0e18'; }}>
                      <div className="relative shrink-0">
                        {i === 0 && (
                          <div className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full flex items-center justify-center z-10"
                            style={{ background: GOLD, fontSize: 10, fontWeight: 700, color: '#07070b' }}>1</div>
                        )}
                        <AlbumArt title={s.title} album={s.album} artist={s.artist} size={i === 0 ? 56 : 44} accentColor={color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold truncate" style={{ color: '#f0ead8', fontSize: i === 0 ? 16 : 14 }}>{s.title}</p>
                        <p className="text-xs truncate" style={{ color: '#5a4f3a' }}>{s.artist}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                        style={{ background: color + '18', color, border: `1px solid ${color}28` }}>
                        {EMOTION_LABELS[dominantKey]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all"
                style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff10' }}
                onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = '#d4a85330'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.borderColor = '#ffffff10'; }}>
                <RotateCcw size={14} /> Try again
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
