import { useParams, useNavigate } from 'react-router-dom';
import { songs } from '../data/songs';
import SongDetail from '../components/SongDetail';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import { useMemo } from 'react';

export default function SongPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { firebaseSongs } = useFirebaseSongs();

  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);
  const song = allSongs.find(s => s.id === id);

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

  return <SongDetail song={song} onBack={() => navigate('/')} />;
}
