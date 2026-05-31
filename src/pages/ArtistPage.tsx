import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Music } from 'lucide-react';
import { songs, EMOTIONAL_AXES, EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import SongCard from '../components/SongCard';
import VibeRadar from '../components/VibeRadar';

const GOLD = '#d4a853';

const ARTIST_BIOS: Record<string, string> = {
  'Stray Kids': "Stray Kids are a self-producing K-pop group formed by JYP Entertainment in 2017. Unlike most groups in the industry, they write, compose, and produce the majority of their own music through their in-house unit 3RACHA. Their sound blends hard-hitting trap production with emotional vulnerability — anthems built for both arenas and 3AM alone.",
  'BTS': "BTS are a seven-member group from Seoul who redefined what K-pop could mean globally. Their catalog spans everything from breezy pop to heavy hip-hop to orchestral balladry, unified by an overarching narrative about youth, self-love, and the search for identity. They are among the best-selling music artists in history.",
  'AJR': "AJR are three brothers from New York City — Adam, Jack, and Ryan Met — who produce everything themselves in their Manhattan apartment. Their music is relentlessly maximalist: samples, brass, synths, and anthemic hooks layered into songs that feel like emotional pressure valves. Known for writing about anxiety, growing up, and the fear of being ordinary.",
  'Lauv': "Lauv (Ari Leff) is a Los Angeles-based singer-songwriter who builds introspective indie-pop from his own experiences with anxiety, loneliness, and love. His music is intimate by design — produced to feel like a private conversation. He has been open about mental health struggles, and that honesty runs through everything he writes.",
  'Jon Bellion': "Jon Bellion is a New York producer-songwriter who operates at the intersection of pop, hip-hop, and orchestral music. He ghost-produced massive hits before releasing his own catalog, and his fingerprints are all over contemporary pop production. His solo work is dense, layered, and deeply personal — faith, family, and creative ambition recurring throughout.",
  'Alec Benjamin': "Alec Benjamin is a Phoenix-born storyteller who writes detailed, character-driven songs that feel like short films. He spent years being dropped by labels and busking before his audience found him organically. His voice is distinctive — light and precise — and his writing operates in specifics where other songwriters stay vague.",
};

export default function ArtistPage() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { firebaseSongs } = useFirebaseSongs();

  const artistName = decodeURIComponent(name ?? '');
  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);
  const artistSongs = useMemo(() => allSongs.filter(s => s.artist === artistName), [allSongs, artistName]);

  const avgStats = useMemo(() => {
    if (!artistSongs.length) return {} as Record<string, number>;
    const totals: Record<string, number> = {};
    for (const s of artistSongs) {
      for (const k of EMOTIONAL_AXES) {
        totals[k] = (totals[k] ?? 0) + s.stats[k as keyof typeof s.stats];
      }
    }
    const result: Record<string, number> = {};
    for (const k of EMOTIONAL_AXES) result[k] = Math.round(totals[k] / artistSongs.length);
    return result;
  }, [artistSongs]);

  const dominantKey = EMOTIONAL_AXES.reduce((a, b) => (avgStats[b] ?? 0) > (avgStats[a] ?? 0) ? b : a, EMOTIONAL_AXES[0]);
  const dominantColor = EMOTION_COLORS[dominantKey] ?? GOLD;
  const bio = ARTIST_BIOS[artistName];

  if (!artistSongs.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#07070b' }}>
        <p className="text-lg font-bold" style={{ color: '#5a4f3a' }}>Artist not found</p>
        <button onClick={() => navigate('/')} className="px-5 py-2 rounded-xl text-sm font-semibold"
          style={{ background: '#d4a85320', color: GOLD, border: '1px solid #d4a85340' }}>
          Back to showcase
        </button>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>{artistName} · Vibe Showcase</title>
      <meta name="description" content={bio ?? `${artistName} — ${artistSongs.length} songs on Vibe Showcase`} />
      <meta property="og:title" content={`${artistName} · Vibe Showcase`} />
      <meta property="og:description" content={bio?.slice(0, 160) ?? `${artistSongs.length} songs, emotion-scored and analyzed.`} />
      <meta property="og:url" content={`https://skz-showcase.vercel.app/artist/${encodeURIComponent(artistName)}`} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
    <div className="min-h-screen" style={{ background: '#07070b' }}>
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, background: `radial-gradient(ellipse, ${dominantColor}0a 0%, transparent 70%)` }} />

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
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: '#d4a85312', color: GOLD, border: '1px solid #d4a85328' }}>
          {artistSongs.length} songs
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">

        {/* Artist hero */}
        <div className="mb-12">
          <div className="h-px mb-6 w-16" style={{ background: `linear-gradient(90deg, ${dominantColor}, transparent)` }} />
          <h1 className="text-5xl font-black mb-2" style={{ color: '#f0ead8' }}>{artistName}</h1>
          <span className="text-sm font-semibold px-3 py-1 rounded-full"
            style={{ background: dominantColor + '18', color: dominantColor, border: `1px solid ${dominantColor}30` }}>
            Signature vibe: {EMOTION_LABELS[dominantKey]}
          </span>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {bio && (
              <div className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: dominantColor + '18', border: `1px solid ${dominantColor}30` }}>
                    <Music size={10} style={{ color: dominantColor }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: dominantColor }}>About</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6b5f4a' }}>{bio}</p>
              </div>
            )}

            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: dominantColor }}>Signature Vibe</span>
              </div>
              <VibeRadar stats={avgStats} size={220} />
            </div>
          </div>
        </div>

        {/* Song grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #d4a85320, transparent)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3a3020' }}>Discography</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, #d4a85320, transparent)' }} />
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artistSongs.map(song => (
              <SongCard key={song.id} song={song} onClick={() => navigate(`/song/${song.id}`)} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
