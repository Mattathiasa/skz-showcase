import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { PlayerProvider } from './contexts/PlayerContext';
import MiniPlayer from './components/MiniPlayer';

const App = lazy(() => import('./App'));
const SongPage = lazy(() => import('./pages/SongPage'));
const ArtistPage = lazy(() => import('./pages/ArtistPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));

function Spinner() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#07070b' }}>
      <div style={{ width: 24, height: 24, border: '2px solid #d4a85340', borderTop: '2px solid #d4a853', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/song/:id" element={<SongPage />} />
            <Route path="/artist/:name" element={<ArtistPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<App />} />
          </Routes>
        </Suspense>
        <MiniPlayer />
      </PlayerProvider>
    </BrowserRouter>
  </StrictMode>,
);
