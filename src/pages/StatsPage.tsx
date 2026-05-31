import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, BarChart3 } from 'lucide-react';
import { songs, EMOTIONAL_AXES, EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import AlbumArt from '../components/AlbumArt';

const GOLD = '#d4a853';

const MAIN_ARTISTS = ['Stray Kids', 'BTS', 'AJR', 'Lauv', 'Jon Bellion', 'Alec Benjamin'];

export default function StatsPage() {
  const navigate = useNavigate();
  const { firebaseSongs } = useFirebaseSongs();

  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);

  const artistCounts = useMemo(() =>
    MAIN_ARTISTS.map(a => ({ artist: a, count: allSongs.filter(s => s.artist === a).length }))
      .sort((a, b) => b.count - a.count),
    [allSongs]
  );

  const avgByAxis = useMemo(() => {
    const result: Record<string, number> = {};
    for (const axis of EMOTIONAL_AXES) {
      result[axis] = Math.round(allSongs.reduce((sum, s) => sum + s.stats[axis as keyof typeof s.stats], 0) / allSongs.length);
    }
    return result;
  }, [allSongs]);

  const artistAvgs = useMemo(() =>
    MAIN_ARTISTS.map(artist => {
      const as = allSongs.filter(s => s.artist === artist);
      const avgs: Record<string, number> = {};
      for (const axis of EMOTIONAL_AXES) {
        avgs[axis] = as.length ? Math.round(as.reduce((sum, s) => sum + s.stats[axis as keyof typeof s.stats], 0) / as.length) : 0;
      }
      const dominant = EMOTIONAL_AXES.reduce((a, b) => avgs[b] > avgs[a] ? b : a, EMOTIONAL_AXES[0]);
      return { artist, avgs, dominant, count: as.length };
    }),
    [allSongs]
  );

  const superlatives = useMemo(() =>
    EMOTIONAL_AXES.map(axis => {
      const sorted = [...allSongs].sort((a, b) => b.stats[axis as keyof typeof b.stats] - a.stats[axis as keyof typeof a.stats]);
      return { axis, top: sorted.slice(0, 3) };
    }),
    [allSongs]
  );

  const mostNiche = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    allSongs.forEach(s => s.tags.forEach(t => { tagCounts[t] = (tagCounts[t] ?? 0) + 1; }));
    return [...allSongs].sort((a, b) => {
      const scoreA = a.tags.reduce((s, t) => s + (tagCounts[t] ?? 0), 0);
      const scoreB = b.tags.reduce((s, t) => s + (tagCounts[t] ?? 0), 0);
      return scoreA - scoreB;
    }).slice(0, 3);
  }, [allSongs]);

  const maxArtist = artistCounts[0];

  return (
    <>
      <Helmet>
        <title>Catalog Stats · Vibe Showcase</title>
        <meta name="description" content={`${allSongs.length} songs across 6 artists — stats, superlatives, and emotion insights.`} />
      </Helmet>
      <div className="min-h-screen" style={{ background: '#07070b' }}>
        <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse, #d4a85308 0%, transparent 70%)' }} />

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
            <BarChart3 size={14} style={{ color: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Catalog Stats</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-10 relative z-10">

          <div className="mb-10">
            <div className="h-px mb-6 w-16" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
            <h1 className="text-4xl font-black mb-2" style={{ color: '#f0ead8' }}>Catalog Insights</h1>
            <p className="text-sm" style={{ color: '#5a4f3a' }}>What the numbers say about {allSongs.length} songs</p>
          </div>

          {/* Top-level numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Total Songs', value: allSongs.length },
              { label: 'Artists', value: 6 },
              { label: 'Most Songs', value: maxArtist?.artist.split(' ')[0] ?? '—' },
              { label: 'Unique Tags', value: new Set(allSongs.flatMap(s => s.tags)).size },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl p-5 text-center"
                style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
                <p className="text-3xl font-black mb-1" style={{ color: '#f0ead8' }}>{value}</p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5a4f3a' }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Artist breakdown */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: GOLD }}>Songs per Artist</p>
            <div className="flex flex-col gap-3">
              {artistCounts.map(({ artist, count }) => {
                const pct = Math.round((count / allSongs.length) * 100);
                const artistAvg = artistAvgs.find(a => a.artist === artist);
                const color = artistAvg ? EMOTION_COLORS[artistAvg.dominant] : GOLD;
                return (
                  <button key={artist} onClick={() => navigate(`/artist/${encodeURIComponent(artist)}`)}
                    className="flex items-center gap-3 text-left group w-full">
                    <span className="w-28 text-xs font-semibold shrink-0 group-hover:underline" style={{ color: '#c8b898' }}>{artist}</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                      <div className="h-2 rounded-full transition-all"
                        style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }} />
                    </div>
                    <span className="text-xs font-bold w-12 text-right shrink-0" style={{ color }}>{count} songs</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog-wide emotion averages */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: GOLD }}>Catalog Emotional Fingerprint</p>
            <div className="flex flex-col gap-3">
              {[...EMOTIONAL_AXES]
                .map(k => [k, avgByAxis[k]] as [string, number])
                .sort((a, b) => b[1] - a[1])
                .map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="w-24 text-xs font-semibold shrink-0" style={{ color: EMOTION_COLORS[key] }}>{EMOTION_LABELS[key]}</span>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                      <div className="h-1.5 rounded-full"
                        style={{ width: `${val}%`, background: `linear-gradient(90deg, ${EMOTION_COLORS[key]}88, ${EMOTION_COLORS[key]})` }} />
                    </div>
                    <span className="w-9 text-xs text-right shrink-0 font-semibold" style={{ color: EMOTION_COLORS[key] }}>{val}%</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Artist vibe comparison */}
          <div className="rounded-2xl p-6 mb-8 overflow-x-auto" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: GOLD }}>Artist Vibe Comparison</p>
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${artistAvgs.length}, minmax(120px, 1fr))` }}>
              {artistAvgs.map(({ artist, avgs, dominant }) => {
                const color = EMOTION_COLORS[dominant];
                const topAxes = [...EMOTIONAL_AXES]
                  .map(k => [k, avgs[k]] as [string, number])
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 3);
                return (
                  <button key={artist} onClick={() => navigate(`/artist/${encodeURIComponent(artist)}`)}
                    className="rounded-xl p-4 text-left transition-all"
                    style={{ background: '#0a0a12', border: `1px solid ${color}20` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + '50'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = color + '20'; }}>
                    <p className="text-xs font-bold mb-3 truncate" style={{ color: '#f0ead8' }}>{artist}</p>
                    <div className="flex flex-col gap-2">
                      {topAxes.map(([k, v]) => (
                        <div key={k}>
                          <div className="flex justify-between mb-0.5">
                            <span className="text-xs" style={{ color: EMOTION_COLORS[k], fontSize: 10 }}>{EMOTION_LABELS[k]}</span>
                            <span className="text-xs font-bold" style={{ color: EMOTION_COLORS[k], fontSize: 10 }}>{v}%</span>
                          </div>
                          <div className="h-1 rounded-full overflow-hidden" style={{ background: '#1a1a28' }}>
                            <div style={{ width: `${v}%`, height: '100%', background: EMOTION_COLORS[k], borderRadius: 9999 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Superlatives */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #d4a85320, transparent)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3a3020' }}>Superlatives</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, #d4a85320, transparent)' }} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {superlatives.map(({ axis, top }) => {
                const color = EMOTION_COLORS[axis];
                return (
                  <div key={axis} className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: `1px solid ${color}20` }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color }}>Most {EMOTION_LABELS[axis]}</p>
                    <div className="flex flex-col gap-2">
                      {top.map((s, i) => (
                        <button key={s.id} onClick={() => navigate(`/song/${s.id}`)}
                          className="flex items-center gap-2 text-left w-full"
                          onMouseEnter={e => { (e.currentTarget.querySelector('.title') as HTMLElement)!.style.textDecoration = 'underline'; }}
                          onMouseLeave={e => { (e.currentTarget.querySelector('.title') as HTMLElement)!.style.textDecoration = 'none'; }}>
                          <span className="text-xs font-bold w-4 shrink-0" style={{ color: i === 0 ? color : '#3a3020' }}>#{i + 1}</span>
                          {i === 0 && <AlbumArt title={s.title} album={s.album} artist={s.artist} size={32} accentColor={color} />}
                          <div className="min-w-0">
                            <p className="title text-xs font-semibold truncate" style={{ color: i === 0 ? '#f0ead8' : '#5a4f3a' }}>{s.title}</p>
                            <p className="text-xs truncate" style={{ color: '#3a3020', fontSize: 10 }}>{s.stats[axis as keyof typeof s.stats]}%</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Most niche songs */}
          <div className="rounded-2xl p-6 mb-10" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Most Unique</p>
            <p className="text-xs mb-5" style={{ color: '#3a3020' }}>Songs with the rarest tag combinations</p>
            <div className="flex flex-col gap-3">
              {mostNiche.map(s => (
                <button key={s.id} onClick={() => navigate(`/song/${s.id}`)}
                  className="flex items-center gap-3 text-left w-full p-3 rounded-xl transition-all"
                  style={{ background: '#0a0a12', border: '1px solid #1a1a28' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a85330'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a28'; }}>
                  <AlbumArt title={s.title} album={s.album} artist={s.artist} size={40} accentColor={GOLD} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: '#f0ead8' }}>{s.title}</p>
                    <p className="text-xs truncate" style={{ color: '#5a4f3a' }}>{s.artist}</p>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end max-w-32">
                    {s.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff08' }}>#{t}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, #d4a85330, transparent)' }} />
          <p className="text-center text-xs" style={{ color: '#2a2018' }}>Vibe Showcase Stats</p>
        </div>
      </div>
    </>
  );
}
