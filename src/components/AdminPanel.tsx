import { useState } from 'react';
import { X, Sparkles, Trash2, Loader2, Check, LogOut, Music } from 'lucide-react';
import { useSuggestions, type Suggestion } from '../hooks/useSuggestions';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import type { Song } from '../data/songs';

const GOLD = '#d4a853';

interface ApiResult {
  intro: string; gist: string; lyricsAnalysis: string;
  tags: string[]; subcategories?: string[];
  stats: { happy: number; sad: number; hype: number; calm: number; alone: number; inLove: number; outOfLove: number };
}

function migrate(s: ApiResult['stats']): Song['stats'] {
  const c = (v: number) => Math.max(0, Math.min(100, Math.round(v)));
  return {
    happy: c(s.happy * 10), sad: c(s.sad * 10), energetic: c(s.hype * 10),
    calm: c(s.calm * 10), romantic: c(((s.inLove * 2 + s.outOfLove * 0.5) / 2.5) * 10),
    lonely: c(s.alone * 10), dark: c(((s.sad + s.outOfLove) / 2) * 10),
    nostalgic: c(((s.calm + s.sad) / 2) * 10),
    acousticness: 50, vocalPresence: 70, danceability: c(s.hype * 10),
  };
}

interface Props { onClose: () => void; onLogout: () => void; }

export default function AdminPanel({ onClose, onLogout }: Props) {
  const { suggestions, deleteSuggestion } = useSuggestions(true);
  const { saveSong } = useFirebaseSongs();
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeAndAdd = async (s: Suggestion) => {
    setAnalyzing(s.id);
    setError(null);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: s.title, artist: s.artist, album: s.album, year: s.year }),
      });
      if (!res.ok) throw new Error();
      const data: ApiResult = await res.json();
      const song: Song = {
        id: `fb-${s.artist.toLowerCase().replace(/\s+/g, '-')}-${s.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
        title: s.title, artist: s.artist,
        album: s.album || 'Unknown Album',
        year: parseInt(s.year || '') || new Date().getFullYear(),
        intro: data.intro, gist: data.gist, lyricsAnalysis: data.lyricsAnalysis,
        tags: data.tags, subcategories: data.subcategories,
        stats: migrate(data.stats),
      };
      await saveSong(song);
      await deleteSuggestion(s.id);
      setDone(s.id);
      setTimeout(() => setDone(null), 2000);
    } catch {
      setError(s.id);
    } finally {
      setAnalyzing(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div className="w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col" style={{ maxHeight: '85vh', background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85330', boxShadow: '0 24px 80px #00000090' }}>

        <div className="px-6 pt-6 pb-4 flex items-center justify-between shrink-0" style={{ borderBottom: '1px solid #d4a85318' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#d4a85318', border: '1px solid #d4a85330' }}>
              <Music size={14} style={{ color: GOLD }} />
            </div>
            <div>
              <h2 className="font-bold text-sm" style={{ color: '#f0ead8' }}>Admin Panel</h2>
              <p className="text-xs" style={{ color: '#5a4f3a' }}>{suggestions.length} pending suggestion{suggestions.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onLogout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
              <LogOut size={12} /> Logout
            </button>
            <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#ffffff08', color: '#5a4f3a' }}>
              <X size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5">
          {suggestions.length === 0 ? (
            <div className="flex flex-col items-center py-16 gap-3">
              <Check size={28} style={{ color: GOLD, opacity: 0.4 }} />
              <p className="text-sm" style={{ color: '#5a4f3a' }}>No pending suggestions</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {suggestions.map(s => (
                <div key={s.id} className="rounded-xl p-4" style={{ background: '#ffffff05', border: `1px solid ${error === s.id ? '#ff444430' : '#d4a85318'}` }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm" style={{ color: '#f0ead8' }}>{s.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: GOLD }}>{s.artist}{s.album ? ` · ${s.album}` : ''}{s.year ? ` (${s.year})` : ''}</p>
                      {s.reason && <p className="text-xs mt-2 leading-relaxed" style={{ color: '#5a4f3a' }}>"{s.reason}"</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {done === s.id ? (
                        <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: '#4ade80', background: '#4ade8015' }}>
                          <Check size={11} /> Added
                        </span>
                      ) : (
                        <>
                          <button onClick={() => analyzeAndAdd(s)} disabled={!!analyzing}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                            style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: analyzing ? 0.6 : 1 }}>
                            {analyzing === s.id ? <Loader2 size={11} className="animate-spin" /> : <Sparkles size={11} />}
                            {analyzing === s.id ? 'Analyzing...' : 'Analyze & Add'}
                          </button>
                          <button onClick={() => deleteSuggestion(s.id)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                            style={{ background: '#ffffff08', color: '#5a4f3a' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#ff6666'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
                            <Trash2 size={12} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {error === s.id && <p className="text-xs mt-2" style={{ color: '#ff8888' }}>Failed to generate analysis. Try again.</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
