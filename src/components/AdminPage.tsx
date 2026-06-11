import { useState, useMemo } from 'react';
import {
  Lock, Sparkles, Trash2, Loader2, Check, LogOut, ShieldCheck,
  Edit3, Save, X, ChevronDown, ChevronUp, Brain, Search,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSuggestions, type Suggestion } from '../hooks/useSuggestions';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';
import {
  songs, EMOTIONAL_AXES, TECHNICAL_AXES, EMOTION_LABELS, SUBCATEGORY_LABELS,
  type Song,
} from '../data/songs';


const GOLD = '#d4a853';
const BG = '#07070b';
const CARD = 'linear-gradient(135deg,#0e0e18,#0b0b14)';
const BORDER = '#d4a85328';
const ALL_SUBCATS = Object.keys(SUBCATEGORY_LABELS);
const ALL_STAT_AXES = [...EMOTIONAL_AXES, ...TECHNICAL_AXES] as string[];

/* ───────────── helpers ───────────── */
interface ApiResult {
  intro: string; gist: string; lyricsAnalysis: string;
  tags: string[]; subcategories?: string[];
  stats: Song['stats'];
}

/* ───────────── sub-components ───────────── */

function TabBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      style={{
        padding: '8px 18px', borderRadius: 10, fontSize: 13, fontWeight: 700,
        cursor: 'pointer', transition: 'all 0.18s',
        background: active ? '#d4a85322' : 'transparent',
        color: active ? GOLD : '#5a4f3a',
        border: `1px solid ${active ? '#d4a85445' : 'transparent'}`,
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#9a8f78'; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#5a4f3a'; }}>
      {label}
    </button>
  );
}

/* ────────── Login ────────── */
function LoginView() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try { await login(email, password); }
    catch { setError('Invalid credentials'); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG, padding: 16 }}>
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(ellipse,#d4a85312 0%,transparent 70%)' }} />
      <div style={{ width: '100%', maxWidth: 360, position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#1a1408,#2e2010)', border: '1px solid #d4a85340', boxShadow: '0 0 24px #d4a85320' }}>
            <Lock size={22} style={{ color: GOLD }} />
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 900, margin: 0 }} className="gold-shimmer">Admin Panel</h1>
          <p style={{ color: '#5a4f3a', fontSize: 13, marginTop: 4 }}>Vibe Showcase</p>
        </div>

        <form onSubmit={submit} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 24px 80px #00000060' }}>
          {error && <div style={{ fontSize: 12, padding: '8px 12px', borderRadius: 8, background: '#ff444415', border: '1px solid #ff444430', color: '#ff8888' }}>{error}</div>}
          {[['Email', 'email', email, setEmail], ['Password', 'password', password, setPassword]].map(([label, type, val, setter]) => (
            <div key={label as string}>
              <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a4f3a', display: 'block', marginBottom: 6 }}>{label as string}</label>
              <input type={type as string} value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)} required autoFocus={type === 'email'}
                style={{ width: '100%', padding: '10px 12px', borderRadius: 12, fontSize: 13, outline: 'none', background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8', boxSizing: 'border-box' }}
                onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
            </div>
          ))}
          <button type="submit" disabled={loading}
            style={{ width: '100%', padding: '12px 0', borderRadius: 12, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: loading ? 'not-allowed' : 'pointer', background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: loading ? 0.6 : 1, transition: 'all 0.18s' }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#d4a85332'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Lock size={13} />}
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: 11, marginTop: 16 }}>
          <a href="/" style={{ color: '#3a3028' }}>← Back to showcase</a>
        </p>
      </div>
    </div>
  );
}

/* ────────── Song Edit Modal ────────── */
interface EditModalProps {
  song: Song & { firestoreId?: string };
  onSave: (updates: Partial<Song>) => Promise<void>;
  onClose: () => void;
}

interface GrokInlineResult {
  intro?: string; gist?: string; lyricsAnalysis?: string;
  emotionalBreakdown?: string; thematicAnalysis?: string;
  suggestedStats?: Partial<Song['stats']>; tags?: string[];
}

function EditModal({ song, onSave, onClose }: EditModalProps) {
  const [form, setForm] = useState<Song>({ ...song });
  const [saving, setSaving] = useState(false);
  const [tagsStr, setTagsStr] = useState(song.tags.join(', '));
  const [subCatsStr, setSubCatsStr] = useState((song.subcategories ?? []).join(', '));
  const [openSection, setOpenSection] = useState<string>('meta');
  // Lyrics (not part of Song type — used for Grok context)
  const [lyrics, setLyrics] = useState('');
  // Grok inline state
  const [analyzing, setAnalyzing] = useState(false);
  const [grokError, setGrokError] = useState('');
  const [grokApplied, setGrokApplied] = useState(false);

  const setField = (k: keyof Song, v: unknown) => setForm(f => ({ ...f, [k]: v }));
  const setStat = (k: string, v: number) => setForm(f => ({ ...f, stats: { ...f.stats, [k]: v } }));

  const handleSave = async () => {
    setSaving(true);
    const updates: Partial<Song> = {
      ...form,
      tags: tagsStr.split(',').map(t => t.trim()).filter(Boolean),
      subcategories: subCatsStr.split(',').map(t => t.trim()).filter(Boolean),
    };
    await onSave(updates);
    setSaving(false);
    onClose();
  };

  const runGrok = async () => {
    setAnalyzing(true);
    setGrokError('');
    setGrokApplied(false);
    try {
      const res = await fetch('/api/grok-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: form.title, artist: form.artist, lyrics }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data: GrokInlineResult = await res.json();

      // Auto-apply all returned fields
      if (data.intro)         setField('intro', data.intro);
      if (data.gist)          setField('gist', data.gist);
      if (data.lyricsAnalysis) setField('lyricsAnalysis', data.lyricsAnalysis);
      if (data.tags?.length)  setTagsStr(data.tags.join(', '));
      if (data.suggestedStats) {
        Object.entries(data.suggestedStats).forEach(([k, v]) => {
          if (v !== undefined) setStat(k, v as number);
        });
      }
      setGrokApplied(true);
      // Switch to analysis section so user sees the results
      setOpenSection('analysis');
    } catch (e: unknown) {
      setGrokError(e instanceof Error ? e.message : 'Grok analysis failed.');
    } finally {
      setAnalyzing(false);
    }
  };

  const Section = ({ id, title, badge, children }: { id: string; title: string; badge?: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 10, borderRadius: 12, overflow: 'hidden', border: `1px solid ${openSection === id ? '#d4a85340' : '#d4a85320'}` }}>
      <button onClick={() => setOpenSection(s => s === id ? '' : id)}
        style={{ width: '100%', padding: '11px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: openSection === id ? '#d4a85312' : '#0a0a12', border: 'none', cursor: 'pointer', color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {title}
          {badge && <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, background: '#4ade8018', color: '#4ade80', border: '1px solid #4ade8030', textTransform: 'none', letterSpacing: 0 }}>{badge}</span>}
        </span>
        {openSection === id ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
      {openSection === id && <div style={{ padding: '14px 16px', background: '#08080f' }}>{children}</div>}
    </div>
  );

  const Field = ({ label, value, onChange, multiline = false, rows = 4 }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean; rows?: number }) => (
    <div style={{ marginBottom: 12 }}>
      <label style={{ fontSize: 10, color: '#5a4f3a', fontWeight: 600, display: 'block', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={rows}
            style={{ width: '100%', padding: '9px 11px', borderRadius: 9, fontSize: 12, outline: 'none', background: '#0e0e18', border: '1px solid #d4a85320', color: '#f0ead8', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: 1.6 }}
            onFocus={e => { e.target.style.borderColor = '#d4a85445'; }}
            onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
        : <input value={value} onChange={e => onChange(e.target.value)}
            style={{ width: '100%', padding: '9px 11px', borderRadius: 9, fontSize: 12, outline: 'none', background: '#0e0e18', border: '1px solid #d4a85320', color: '#f0ead8', boxSizing: 'border-box' }}
            onFocus={e => { e.target.style.borderColor = '#d4a85445'; }}
            onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ width: '100%', maxWidth: 720, maxHeight: '92vh', display: 'flex', flexDirection: 'column', borderRadius: 20, overflow: 'hidden', background: CARD, border: `1px solid ${BORDER}`, boxShadow: '0 32px 100px #00000090' }}>

        {/* Header */}
        <div style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #d4a85318', flexShrink: 0 }}>
          <div>
            <p style={{ color: '#5a4f3a', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Editing Song</p>
            <h2 style={{ color: '#f0ead8', fontWeight: 800, fontSize: 16, margin: '3px 0 0' }}>{song.title}</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {/* Grok AI button */}
            <button onClick={runGrok} disabled={analyzing}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: analyzing ? 'not-allowed' : 'pointer', background: analyzing ? '#1a1a28' : '#d4a85318', color: analyzing ? '#5a4f3a' : GOLD, border: `1px solid ${analyzing ? '#d4a85320' : '#d4a85440'}`, transition: 'all 0.18s', opacity: analyzing ? 0.7 : 1 }}
              onMouseEnter={e => { if (!analyzing) e.currentTarget.style.background = '#d4a85330'; }}
              onMouseLeave={e => { if (!analyzing) e.currentTarget.style.background = '#d4a85318'; }}>
              {analyzing ? <Loader2 size={13} className="animate-spin" /> : <Brain size={13} />}
              {analyzing ? 'Analyzing…' : 'Grok AI'}
            </button>
            <button onClick={handleSave} disabled={saving}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', background: '#d4a85322', color: GOLD, border: '1px solid #d4a85440', opacity: saving ? 0.6 : 1, transition: 'all 0.18s' }}>
              {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff0a', border: '1px solid #ffffff10', color: '#5a4f3a', cursor: 'pointer' }}>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Status banners */}
        {grokError && (
          <div style={{ padding: '10px 22px', background: '#ff444410', borderBottom: '1px solid #ff444425', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <AlertCircle size={13} style={{ color: '#ff8888', flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: '#ff8888' }}>{grokError}</span>
          </div>
        )}
        {grokApplied && (
          <div style={{ padding: '10px 22px', background: '#4ade8010', borderBottom: '1px solid #4ade8025', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <Check size={13} style={{ color: '#4ade80', flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: '#4ade80' }}>Grok AI applied — review fields below, then save.</span>
          </div>
        )}

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '16px 22px' }}>

          <Section id="meta" title="Metadata">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Field label="Title" value={form.title} onChange={v => setField('title', v)} />
              <Field label="Artist" value={form.artist} onChange={v => setField('artist', v)} />
              <Field label="Album" value={form.album} onChange={v => setField('album', v)} />
              <Field label="Year" value={String(form.year)} onChange={v => setField('year', parseInt(v) || form.year)} />
            </div>
            <Field label="Tags (comma-separated)" value={tagsStr} onChange={setTagsStr} />
            <Field label="Subcategories (comma-separated)" value={subCatsStr} onChange={setSubCatsStr} />
          </Section>

          {/* NEW: Lyrics section */}
          <Section id="lyrics" title="Lyrics" badge="Used by Grok AI">
            <p style={{ fontSize: 11, color: '#5a4f3a', margin: '0 0 10px', lineHeight: 1.5 }}>
              Paste the song lyrics here. They are used by <strong style={{ color: GOLD }}>Grok AI</strong> for deeper analysis — not stored in the database.
            </p>
            <Field label="Lyrics" value={lyrics} onChange={setLyrics} multiline rows={10} />
            <button onClick={runGrok} disabled={analyzing}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: analyzing ? 'not-allowed' : 'pointer', background: '#d4a85320', color: GOLD, border: '1px solid #d4a85440', opacity: analyzing ? 0.6 : 1, marginTop: 4 }}>
              {analyzing ? <Loader2 size={12} className="animate-spin" /> : <Brain size={12} />}
              {analyzing ? 'Running Grok analysis…' : '🧠 Analyze with Grok AI & Auto-fill Fields'}
            </button>
          </Section>

          <Section id="analysis" title="Written Analysis" badge={grokApplied ? '✓ Grok filled' : undefined}>
            <Field label="Read Before Listening (intro)" value={form.intro} onChange={v => setField('intro', v)} multiline rows={3} />
            <Field label="What It's About (gist)" value={form.gist} onChange={v => setField('gist', v)} multiline rows={3} />
            <Field label="Lyrics Analysis" value={form.lyricsAnalysis ?? ''} onChange={v => setField('lyricsAnalysis', v)} multiline rows={5} />
          </Section>

          <Section id="emotion" title="Emotional Stats (0–100)" badge={grokApplied ? '✓ Grok filled' : undefined}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {EMOTIONAL_AXES.map(k => (
                <div key={k}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <label style={{ fontSize: 10, color: '#5a4f3a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{EMOTION_LABELS[k]}</label>
                    <span style={{ fontSize: 11, fontWeight: 700, color: GOLD }}>{form.stats[k as keyof typeof form.stats]}</span>
                  </div>
                  <input type="range" min={0} max={100} value={form.stats[k as keyof typeof form.stats]}
                    onChange={e => setStat(k, parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: GOLD }} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="production" title="Production Stats (0–100)" badge={grokApplied ? '✓ Grok filled' : undefined}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {TECHNICAL_AXES.map(k => (
                <div key={k}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <label style={{ fontSize: 10, color: '#5a4f3a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{EMOTION_LABELS[k]}</label>
                    <span style={{ fontSize: 11, fontWeight: 700, color: GOLD }}>{form.stats[k as keyof typeof form.stats]}</span>
                  </div>
                  <input type="range" min={0} max={100} value={form.stats[k as keyof typeof form.stats]}
                    onChange={e => setStat(k, parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: GOLD }} />
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}


/* ────────── Grok AI Analyzer Panel ────────── */
interface GrokResult {
  lyricsAnalysis: string;
  emotionalBreakdown: string;
  thematicAnalysis: string;
  suggestedStats: Partial<Song['stats']>;
  tags: string[];
}

function GrokAnalyzerTab() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GrokResult | null>(null);
  const [error, setError] = useState('');

  const analyze = async () => {
    if (!title.trim() || !artist.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch('/api/grok-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, artist, lyrics }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Analysis failed');
      }
      const data: GrokResult = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Analysis failed. Check API key configuration.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 12px', borderRadius: 10, fontSize: 13,
    outline: 'none', background: '#0a0a12', border: '1px solid #d4a85320',
    color: '#f0ead8', boxSizing: 'border-box', fontFamily: 'inherit',
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <Brain size={18} style={{ color: GOLD }} />
          <h2 style={{ color: '#f0ead8', fontWeight: 800, fontSize: 18, margin: 0 }}>Grok AI Deep Analysis</h2>
        </div>
        <p style={{ color: '#5a4f3a', fontSize: 13, margin: 0 }}>
          Powered by xAI Grok — provide song details and optionally paste lyrics for a deep analytical breakdown with suggested stats.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        {[['Song Title', title, setTitle], ['Artist', artist, setArtist]].map(([label, val, setter]) => (
          <div key={label as string}>
            <label style={{ fontSize: 11, color: '#5a4f3a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: 6 }}>{label as string}</label>
            <input value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)}
              style={inputStyle} placeholder={`Enter ${(label as string).toLowerCase()}…`}
              onFocus={e => { e.target.style.borderColor = '#d4a85445'; }}
              onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: '#5a4f3a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: 6 }}>
          Lyrics (optional — paste for deeper analysis)
        </label>
        <textarea value={lyrics} onChange={e => setLyrics(e.target.value)} rows={8}
          style={{ ...inputStyle, resize: 'vertical' }} placeholder="Paste lyrics here for a more accurate analysis…"
          onFocus={e => { e.target.style.borderColor = '#d4a85445'; }}
          onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
      </div>

      <button onClick={analyze} disabled={loading || !title.trim() || !artist.trim()}
        style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: (loading || !title.trim() || !artist.trim()) ? 'not-allowed' : 'pointer', background: '#d4a85322', color: GOLD, border: '1px solid #d4a85440', opacity: (loading || !title.trim() || !artist.trim()) ? 0.5 : 1, transition: 'all 0.18s', marginBottom: 24 }}
        onMouseEnter={e => { if (!loading && title.trim() && artist.trim()) e.currentTarget.style.background = '#d4a85335'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
        {loading ? <Loader2 size={14} className="animate-spin" /> : <Brain size={14} />}
        {loading ? 'Analyzing with Grok…' : 'Analyze with Grok AI'}
      </button>

      {error && (
        <div style={{ padding: '14px 16px', borderRadius: 12, background: '#ff444412', border: '1px solid #ff444430', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <AlertCircle size={15} style={{ color: '#ff8888', flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: '#ff8888', fontSize: 13, margin: 0 }}>{error}</p>
        </div>
      )}

      {result && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Analysis sections */}
          {[
            { label: '🎵 Lyrical Breakdown', content: result.lyricsAnalysis },
            { label: '💭 Emotional Analysis', content: result.emotionalBreakdown },
            { label: '🎯 Thematic Analysis', content: result.thematicAnalysis },
          ].map(({ label, content }) => content ? (
            <div key={label} style={{ borderRadius: 14, background: '#0e0e18', border: '1px solid #d4a85320', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid #d4a85315', background: '#0a0a12' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: GOLD }}>{label}</span>
              </div>
              <p style={{ padding: '14px 16px', fontSize: 13, color: '#8a7860', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>{content}</p>
            </div>
          ) : null)}

          {/* Suggested Stats */}
          {result.suggestedStats && Object.keys(result.suggestedStats).length > 0 && (
            <div style={{ borderRadius: 14, background: '#0e0e18', border: '1px solid #d4a85320', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid #d4a85315', background: '#0a0a12' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: GOLD }}>📊 Suggested Stat Adjustments</span>
              </div>
              <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {(ALL_STAT_AXES).filter(k => result.suggestedStats[k as keyof typeof result.suggestedStats] !== undefined).map(k => (
                  <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 11, color: '#5a4f3a', fontWeight: 600, width: 90, textTransform: 'capitalize', flexShrink: 0 }}>{EMOTION_LABELS[k] ?? k}</span>
                    <div style={{ flex: 1, height: 4, borderRadius: 9999, background: '#1a1a28', overflow: 'hidden' }}>
                      <div style={{ width: `${result.suggestedStats[k as keyof typeof result.suggestedStats]}%`, height: '100%', background: `linear-gradient(90deg, ${GOLD}88, ${GOLD})`, borderRadius: 9999 }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, width: 28, textAlign: 'right' }}>{result.suggestedStats[k as keyof typeof result.suggestedStats]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Tags */}
          {result.tags && result.tags.length > 0 && (
            <div style={{ borderRadius: 14, background: '#0e0e18', border: '1px solid #d4a85320', padding: 16 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: GOLD, margin: '0 0 10px' }}>🏷️ Suggested Tags</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {result.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: '#d4a85315', color: GOLD, border: '1px solid #d4a85330' }}>#{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ────────── Library Tab ────────── */
function LibraryTab() {
  const { firebaseSongs, updateSong, deleteSong, saveSong } = useFirebaseSongs();
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<(Song & { firestoreId?: string }) | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState<{ done: number; total: number } | null>(null);

  // Merge: Firebase songs first (they override static ones with same id),
  // then static songs that haven't been promoted to Firebase yet.
  const allSongs = useMemo<(Song & { firestoreId?: string; isStatic?: boolean })[]>(() => {
    const fbIds = new Set(firebaseSongs.map(s => s.id));
    const staticOnly = songs.filter(s => !fbIds.has(s.id)).map(s => ({ ...s, isStatic: true }));
    return [...firebaseSongs, ...staticOnly];
  }, [firebaseSongs]);

  const unsyncedSongs = useMemo(() => allSongs.filter(s => !s.firestoreId), [allSongs]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allSongs.filter(s =>
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      (s.album ?? '').toLowerCase().includes(q)
    );
  }, [allSongs, search]);

  const handleUpdate = async (updates: Partial<Song>) => {
    if (!editing) return;
    if (editing.firestoreId) {
      await updateSong(editing.firestoreId, updates);
    } else {
      await saveSong({ ...editing, ...updates });
    }
    setSaveMsg(editing.firestoreId ? 'Saved!' : 'Saved to Firebase!');
    setTimeout(() => setSaveMsg(null), 2500);
  };

  const handleDelete = async (firestoreId: string) => {
    setDeleting(firestoreId);
    try { await deleteSong(firestoreId); } finally { setDeleting(null); setConfirmDelete(null); }
  };

  const syncAllToFirebase = async () => {
    if (syncing || unsyncedSongs.length === 0) return;
    setSyncing(true);
    setSyncProgress({ done: 0, total: unsyncedSongs.length });
    let done = 0;
    for (const s of unsyncedSongs) {
      try { await saveSong(s); } catch { /* continue */ }
      done++;
      setSyncProgress({ done, total: unsyncedSongs.length });
    }
    setSyncing(false);
    setSyncProgress(null);
    setSaveMsg(`Synced ${done} songs to Firebase!`);
    setTimeout(() => setSaveMsg(null), 4000);
  };

  return (
    <div>
      {/* Search bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, background: '#0a0a12', border: '1px solid #d4a85320', borderRadius: 12, padding: '10px 14px' }}>
        <Search size={14} style={{ color: '#5a4f3a', flexShrink: 0 }} />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search all songs…"
          style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: '#f0ead8' }} />
        {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: '#5a4f3a', cursor: 'pointer', padding: 0 }}><X size={13} /></button>}
      </div>

      {/* Legend + count + Sync button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
        <p style={{ color: '#5a4f3a', fontSize: 11, margin: 0 }}>
          {filtered.length} of {allSongs.length} songs
          &nbsp;·&nbsp;<span style={{ color: GOLD }}>{firebaseSongs.length} in Firebase</span>
          {unsyncedSongs.length > 0 && <>&nbsp;·&nbsp;<span style={{ color: '#f87171' }}>{unsyncedSongs.length} not synced</span></>}
        </p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: '#5a4f3a', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: GOLD, display: 'inline-block' }} /> Firebase
          </span>
          <span style={{ fontSize: 10, color: '#5a4f3a', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: '#3a3a50', display: 'inline-block' }} /> Built-in
          </span>
          {unsyncedSongs.length > 0 && (
            <button onClick={syncAllToFirebase} disabled={syncing}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, fontSize: 11, fontWeight: 700, cursor: syncing ? 'not-allowed' : 'pointer', background: syncing ? '#1a1a28' : '#d4a85320', color: syncing ? '#5a4f3a' : GOLD, border: `1px solid ${syncing ? '#d4a85318' : '#d4a85440'}`, transition: 'all 0.18s', opacity: syncing ? 0.7 : 1 }}
              onMouseEnter={e => { if (!syncing) e.currentTarget.style.background = '#d4a85332'; }}
              onMouseLeave={e => { if (!syncing) e.currentTarget.style.background = '#d4a85320'; }}>
              {syncing
                ? <><Loader2 size={11} className="animate-spin" /> Syncing {syncProgress?.done}/{syncProgress?.total}…</>
                : <>⬆️ Sync {unsyncedSongs.length} to Firebase</>}
            </button>
          )}
        </div>
      </div>

      {saveMsg && (
        <div style={{ marginBottom: 12, padding: '10px 14px', borderRadius: 10, background: '#4ade8015', border: '1px solid #4ade8030', color: '#4ade80', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Check size={13} /> {saveMsg}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map(song => {
          const isFirebase = !!song.firestoreId;
          const rowKey = song.firestoreId ?? song.id;
          return (
            <div key={rowKey} style={{ borderRadius: 12, padding: '12px 14px', background: '#0e0e18', border: `1px solid ${isFirebase ? '#d4a85328' : '#3a3a5040'}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* Source badge */}
              <div style={{ width: 6, height: 6, borderRadius: 9999, flexShrink: 0, background: isFirebase ? GOLD : '#3a3a60' }} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <p style={{ color: '#f0ead8', fontWeight: 700, fontSize: 13, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{song.title}</p>
                  {!isFirebase && (
                    <span style={{ fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4, background: '#2a2a40', color: '#5a5a80', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0 }}>BUILT-IN</span>
                  )}
                </div>
                <p style={{ color: GOLD, fontSize: 11, margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 0.8 }}>
                  {song.artist}{song.album ? ` · ${song.album}` : ''}
                </p>
              </div>

              <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                <button onClick={() => setEditing(song)}
                  style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 600, cursor: 'pointer', background: '#d4a85318', color: GOLD, border: '1px solid #d4a85330', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d4a85330'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#d4a85318'; }}>
                  <Edit3 size={11} /> Edit
                </button>

                {isFirebase && (
                  confirmDelete === song.firestoreId ? (
                    <div style={{ display: 'flex', gap: 5 }}>
                      <button onClick={() => handleDelete(song.firestoreId!)} disabled={deleting === song.firestoreId}
                        style={{ padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', background: '#ff444418', color: '#ff6666', border: '1px solid #ff444430' }}>
                        {deleting === song.firestoreId ? <Loader2 size={11} className="animate-spin" /> : 'Confirm'}
                      </button>
                      <button onClick={() => setConfirmDelete(null)} style={{ padding: '6px 10px', borderRadius: 8, fontSize: 11, cursor: 'pointer', background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff10' }}>Cancel</button>
                    </div>
                  ) : (
                    <button onClick={() => setConfirmDelete(song.firestoreId!)}
                      style={{ width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff10', transition: 'all 0.15s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ff6666'; e.currentTarget.style.background = '#ff444412'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
                      <Trash2 size={12} />
                    </button>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      {editing && (
        <EditModal
          song={editing}
          onSave={handleUpdate}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}


/* ────────── Suggestions Tab ────────── */
function SuggestionsTab() {
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

  if (suggestions.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80, gap: 12 }}>
        <Check size={28} style={{ color: GOLD, opacity: 0.3 }} />
        <p style={{ color: '#5a4f3a', fontSize: 14, fontWeight: 600 }}>No pending suggestions</p>
        <p style={{ color: '#3a3020', fontSize: 12 }}>People can suggest songs from the main showcase</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {suggestions.map(s => (
        <div key={s.id} style={{ borderRadius: 16, padding: 20, background: '#0e0e18', border: `1px solid ${errors.has(s.id) ? '#ff444428' : '#d4a85320'}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: '#f0ead8', fontWeight: 700, fontSize: 15, margin: 0 }}>{s.title}</p>
              <p style={{ color: GOLD, fontSize: 13, margin: '4px 0 0' }}>
                {s.artist}{s.album ? ` · ${s.album}` : ''}{s.year ? ` (${s.year})` : ''}
              </p>
              {s.reason && <p style={{ color: '#5a4f3a', fontSize: 12, margin: '8px 0 0', fontStyle: 'italic', lineHeight: 1.5 }}>"{s.reason}"</p>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              {done === s.id ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 10, color: '#4ade80', background: '#4ade8015', border: '1px solid #4ade8025' }}>
                  <Check size={12} /> Added
                </span>
              ) : (
                <>
                  <button onClick={() => analyzeAndAdd(s)} disabled={!!analyzing}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: analyzing ? 'not-allowed' : 'pointer', background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: analyzing && analyzing !== s.id ? 0.4 : 1, transition: 'all 0.15s' }}
                    onMouseEnter={e => { if (!analyzing) e.currentTarget.style.background = '#d4a85335'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
                    {analyzing === s.id ? <><Loader2 size={12} className="animate-spin" /> Analyzing…</> : <><Sparkles size={12} /> Analyze & Add</>}
                  </button>
                  <button onClick={() => deleteSuggestion(s.id)}
                    style={{ width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff10', cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#ff6666'; e.currentTarget.style.background = '#ff444412'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; e.currentTarget.style.background = '#ffffff08'; }}>
                    <Trash2 size={13} />
                  </button>
                </>
              )}
            </div>
          </div>
          {errors.has(s.id) && <p style={{ color: '#ff8888', fontSize: 12, marginTop: 10 }}>Failed to generate analysis. Try again.</p>}
        </div>
      ))}
    </div>
  );
}

/* ────────── Dashboard ────────── */
type Tab = 'suggestions' | 'library' | 'grok';

function DashboardView() {
  const { logout } = useAuth();
  const { suggestions } = useSuggestions(true);
  const { firebaseSongs } = useFirebaseSongs();
  const [tab, setTab] = useState<Tab>('suggestions');

  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(ellipse,#d4a85312 0%,transparent 70%)' }} />

      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 20, padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(7,7,11,0.95)', borderBottom: '1px solid #d4a85320', backdropFilter: 'blur(20px)' }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#1a1408,#2e2010)', border: '1px solid #d4a85340' }}>
          <ShieldCheck size={16} style={{ color: GOLD }} />
        </div>
        <div>
          <h1 style={{ fontSize: 15, fontWeight: 900, margin: 0 }} className="gold-shimmer">Admin Panel</h1>
          <p style={{ fontSize: 11, color: '#5a4f3a', margin: '2px 0 0' }}>{firebaseSongs.length + songs.length} songs · {suggestions.length} pending</p>
        </div>
        <div style={{ flex: 1 }} />
        <a href="/" style={{ fontSize: 12, padding: '7px 14px', borderRadius: 9, background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a', textDecoration: 'none', transition: 'color 0.15s' }}
          onMouseEnter={e => { (e.target as HTMLElement).style.color = '#f0ead8'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.color = '#5a4f3a'; }}>
          ← Showcase
        </a>
        <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a', transition: 'color 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
          <LogOut size={12} /> Logout
        </button>
      </header>

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '32px 24px', position: 'relative', zIndex: 10 }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28, background: '#0a0a12', border: '1px solid #d4a85318', borderRadius: 14, padding: 4, width: 'fit-content' }}>
          <TabBtn label={`✉️ Suggestions ${suggestions.length > 0 ? `(${suggestions.length})` : ''}`} active={tab === 'suggestions'} onClick={() => setTab('suggestions')} />
          <TabBtn label={`📚 Library (${firebaseSongs.length + songs.length})`} active={tab === 'library'} onClick={() => setTab('library')} />
          <TabBtn label="🧠 Grok AI" active={tab === 'grok'} onClick={() => setTab('grok')} />
        </div>

        {/* Tab Content */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px', boxShadow: '0 8px 40px #00000040' }}>
          {tab === 'suggestions' && <SuggestionsTab />}
          {tab === 'library' && <LibraryTab />}
          {tab === 'grok' && <GrokAnalyzerTab />}
        </div>
      </main>
    </div>
  );
}

/* ────────── Root Export ────────── */
export default function AdminPage() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG }}>
      <Loader2 size={24} style={{ color: GOLD }} className="animate-spin" />
    </div>
  );

  if (!user || !isAdmin) return <LoginView />;
  return <DashboardView />;
}

// Export ALL_SUBCATS for type checking elsewhere
export { ALL_SUBCATS, ALL_STAT_AXES };
