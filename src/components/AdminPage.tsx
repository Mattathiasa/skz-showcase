import { useState } from 'react';
import { Lock, Sparkles, Trash2, Loader2, Check, LogOut, Music, ShieldCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSuggestions, type Suggestion } from '../hooks/useSuggestions';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import type { Song } from '../data/songs';

const GOLD = '#d4a853';

interface ApiResult {
  intro: string; gist: string; lyricsAnalysis: string;
  tags: string[]; subcategories?: string[];
  stats: Song['stats'];
}

function LoginView() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#07070b' }}>
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(ellipse, #d4a85312 0%, transparent 70%)' }} />

      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1a1408, #2e2010)', border: '1px solid #d4a85340', boxShadow: '0 0 24px #d4a85320' }}>
            <Lock size={22} style={{ color: GOLD }} />
          </div>
          <h1 className="text-2xl font-black gold-shimmer mb-1">Admin Panel</h1>
          <p className="text-sm" style={{ color: '#5a4f3a' }}>Vibe Showcase</p>
        </div>

        <form onSubmit={submit} className="rounded-2xl p-6 flex flex-col gap-4"
          style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85328', boxShadow: '0 24px 80px #00000060' }}>

          {error && (
            <div className="text-xs px-3 py-2 rounded-lg" style={{ background: '#ff444415', border: '1px solid #ff444430', color: '#ff8888' }}>
              {error}
            </div>
          )}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoFocus
              className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
              onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
              onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
              onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
              onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
          </div>

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
            style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: loading ? 0.6 : 1 }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#d4a85332'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Lock size={13} />}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-xs mt-4" style={{ color: '#2a2018' }}>
          <a href="/" style={{ color: '#3a3028' }}>← Back to showcase</a>
        </p>
      </div>
    </div>
  );
}

function DashboardView() {
  const { logout } = useAuth();
  const { suggestions, deleteSuggestion } = useSuggestions(true);
  const { saveSong } = useFirebaseSongs();
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [errors, setErrors] = useState<Set<string>>(new Set());

  const analyzeAndAdd = async (s: Suggestion) => {
    setAnalyzing(s.id);
    setErrors(prev => { const n = new Set(prev); n.delete(s.id); return n; });
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
        stats: data.stats,
      };
      await saveSong(song);
      await deleteSuggestion(s.id);
      setDone(s.id);
      setTimeout(() => setDone(null), 2500);
    } catch {
      setErrors(prev => new Set(prev).add(s.id));
    } finally {
      setAnalyzing(null);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#07070b' }}>
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(ellipse, #d4a85312 0%, transparent 70%)' }} />

      <header className="sticky top-0 z-20 px-6 py-4 flex items-center gap-4"
        style={{ background: 'rgba(7,7,11,0.92)', borderBottom: '1px solid #d4a85320', backdropFilter: 'blur(20px)' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a1408, #2e2010)', border: '1px solid #d4a85340' }}>
          <ShieldCheck size={16} style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="font-black text-base leading-none gold-shimmer">Admin Panel</h1>
          <p className="text-xs mt-0.5" style={{ color: '#5a4f3a' }}>{suggestions.length} pending suggestion{suggestions.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex-1" />
        <a href="/" className="text-xs px-3 py-1.5 rounded-lg transition-all" style={{ color: '#5a4f3a', background: '#ffffff08', border: '1px solid #ffffff0a' }}
          onMouseEnter={e => { (e.target as HTMLElement).style.color = '#f0ead8'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.color = '#5a4f3a'; }}>
          ← Showcase
        </a>
        <button onClick={logout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
          <LogOut size={12} /> Logout
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 relative z-10">
        {suggestions.length === 0 ? (
          <div className="flex flex-col items-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: '#d4a85310', border: '1px solid #d4a85520' }}>
              <Music size={28} style={{ color: GOLD, opacity: 0.4 }} />
            </div>
            <p className="text-base font-semibold" style={{ color: '#5a4f3a' }}>No pending suggestions</p>
            <p className="text-sm" style={{ color: '#3a3020' }}>People can suggest songs from the main showcase</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {suggestions.map(s => (
              <div key={s.id} className="rounded-2xl p-5"
                style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: `1px solid ${errors.has(s.id) ? '#ff444428' : '#d4a85320'}` }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold" style={{ color: '#f0ead8' }}>{s.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: GOLD }}>
                      {s.artist}{s.album ? ` · ${s.album}` : ''}{s.year ? ` (${s.year})` : ''}
                    </p>
                    {s.reason && (
                      <p className="text-xs mt-2 leading-relaxed italic" style={{ color: '#5a4f3a' }}>
                        "{s.reason}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {done === s.id ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: '#4ade80', background: '#4ade8015', border: '1px solid #4ade8025' }}>
                        <Check size={12} /> Added
                      </span>
                    ) : (
                      <>
                        <button onClick={() => analyzeAndAdd(s)} disabled={!!analyzing}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                          style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: analyzing && analyzing !== s.id ? 0.4 : 1 }}
                          onMouseEnter={e => { if (!analyzing) e.currentTarget.style.background = '#d4a85335'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
                          {analyzing === s.id
                            ? <><Loader2 size={12} className="animate-spin" /> Analyzing...</>
                            : <><Sparkles size={12} /> Analyze &amp; Add</>}
                        </button>
                        <button onClick={() => deleteSuggestion(s.id)}
                          className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                          style={{ background: '#ffffff08', color: '#5a4f3a' }}
                          onMouseEnter={e => { e.currentTarget.style.color = '#ff6666'; e.currentTarget.style.background = '#ff444412'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
                          <Trash2 size={13} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                {errors.has(s.id) && (
                  <p className="text-xs mt-2" style={{ color: '#ff8888' }}>Failed to generate analysis. Try again.</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminPage() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#07070b' }}>
        <Loader2 size={24} style={{ color: GOLD }} className="animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) return <LoginView />;
  return <DashboardView />;
}
