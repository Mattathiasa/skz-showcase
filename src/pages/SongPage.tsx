import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { songs } from '../data/songs';
import SongDetail from '../components/SongDetail';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import { useAlbumArt } from '../hooks/useAlbumArt';
import { useMemo } from 'react';

export default function SongPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { firebaseSongs } = useFirebaseSongs();

  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);
  const song = allSongs.find(s => s.id === id);

  const { artUrl } = useAlbumArt(song?.title ?? '', song?.artist ?? '', song?.album ?? '');
  const siteUrl = 'https://skz-showcase.vercel.app';

  if (!song) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#07070b' }}>
        <p className="text-lg font-bold" style={{ color: '#5a4f3a' }}>Song not found</p>
        <button onClick={() => navigate('/')} className="px-5 py-2 rounded-xl text-sm font-semibold"
          style={{ background: '#d4a85320', color: '#d4a853', border: '1px solid #d4a85340' }}>
          Back to showcase
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{song.title} — {song.artist} · Vibe Showcase</title>
        <meta name="description" content={song.intro} />
        <meta property="og:title" content={`${song.title} — ${song.artist}`} />
        <meta property="og:description" content={song.gist} />
        <meta property="og:url" content={`${siteUrl}/song/${song.id}`} />
        <meta property="og:type" content="music.song" />
        {artUrl && <meta property="og:image" content={artUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${song.title} — ${song.artist}`} />
        <meta name="twitter:description" content={song.intro} />
        {artUrl && <meta name="twitter:image" content={artUrl} />}
      </Helmet>
      <SongDetail song={song} onBack={() => navigate('/')} />
    </>
  );
}
