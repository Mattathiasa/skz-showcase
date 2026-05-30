import { useState } from 'react';
import { X, Sparkles, Music, Loader2, Check, AlertCircle } from 'lucide-react';
import type { Song } from '../data/songs';

const GOLD = '#d4a853';

interface ApiResult {
  intro: string;
  gist: string;
  lyricsAnalysis: string;
  tags: string[];
  subcategories?: string[];
  stats: {
    happy: number; sad: number; hype: number;
    calm: number; alone: number; inLove: number; outOfLove: number;
  };
}

function migrate(s: ApiResult['stats']): Song['stats'] {
  const clamp = (v: number) => Math.max(0, Math.min(100, Math.round(v)));
  return {
    happy: clamp(s.happy * 10),
    sad: clamp(s.sad * 10),
    energetic: clamp(s.hype * 10),
    calm: clamp(s.calm * 10),
    romantic: clamp(((s.inLove * 2 + s.outOfLove * 0.5) / 2.5) * 10),
    lonely: clamp(s.alone * 10),
    dark: clamp(((s.sad + s.outOfLove) / 2) * 10),
    nostalgic: clamp(((s.calm + s.sad) / 2) * 10),
    acousticness: 50,
    vocalPresence: 70,
    danceability: clamp(s.hype * 10),
  };
}

interface Props {
  onClose: () => void;
  onAdd: (song: Song) => void;
}

type Step = 'form' | 'generating' | 'preview' | 'done';

export default function AddSongModal({ onClose, onAdd }: Props) {
  const [step, setStep] = useState<Step>('form');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<Song | null>(null);

  const generate = async () => {
    if (!title.trim() || !artist.trim()) {
      setError('Title and artist are required');
      return;
    }
    setError('');
    setStep('generating');

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), artist: artist.trim(), album: album.trim(), year: year.trim() }),
      });

      if (!res.ok) throw new Error('API error');
      const data: ApiResult = await res.json();

      const id = `custom-${artist.toLowerCase().replace(/\s+/g, '-')}-${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
      const song: Song = {
        id,
        title: title.trim(),
        artist: artist.trim(),
        album: album.trim() || 'Unknown Album',
        year: parseInt(year) || new Date().getFullYear(),
        intro: data.intro,
        gist: data.gist,
        lyricsAnalysis: data.lyricsAnalysis,
        tags: data.tags,
        subcategories: data.subcategories,
        stats: migrate(data.stats),
      };

      setPreview(song);
      setStep('preview');
    } catch {
      setError('Failed to generate analysis. Check your API key and try again.');
      setStep('form');
    }
  };

  const confirm = () => {
    if (!preview) return;
    onAdd(preview);
    setStep('done');
    setTimeout(onClose, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div className="w-full max-w-lg rounded-2xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, #0e0e18, #0b0b14)',
          border: '1px solid #d4a85330',
          boxShadow: '0 24px 80px #00000090, 0 0 60px #d4a85310',
        }}>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between"
          style={{ borderBottom: '1px solid #d4a85318' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: '#d4a85318', border: '1px solid #d4a85330' }}>
              <Music size={14} style={{ color: GOLD }} />
            </div>
            <div>
              <h2 className="font-bold text-sm" style={{ color: '#f0ead8' }}>Add a Song</h2>
              <p className="text-xs" style={{ color: '#5a4f3a' }}>AI-powered analysis</p>
            </div>
          </div>
          <button onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
            style={{ background: '#ffffff08', color: '#5a4f3a' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
            <X size={14} />
          </button>
        </div>

        <div className="px-6 py-5">
          {step === 'done' ? (
            <div className="flex flex-col items-center py-8 gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: '#d4a85320', border: '1px solid #d4a85340' }}>
                <Check size={22} style={{ color: GOLD }} />
              </div>
              <p className="font-semibold text-sm" style={{ color: '#f0ead8' }}>Song added!</p>
            </div>
          ) : step === 'generating' ? (
            <div className="flex flex-col items-center py-10 gap-4">
              <Loader2 size={28} style={{ color: GOLD }} className="animate-spin" />
              <div className="text-center">
                <p className="text-sm font-semibold" style={{ color: '#f0ead8' }}>Generating analysis...</p>
                <p className="text-xs mt-1" style={{ color: '#5a4f3a' }}>Claude is listening to the vibes</p>
              </div>
            </div>
          ) : step === 'preview' && preview ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-4" style={{ background: '#ffffff06', border: '1px solid #d4a85318' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>
                  {preview.artist} — {preview.title}
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: '#f0ead8' }}>{preview.intro}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6b5f4a' }}>{preview.gist}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {preview.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: '#d4a85314', color: '#d4a85390', border: '1px solid #d4a85320' }}>
                    #{t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {(['happy','sad','energetic','calm','romantic','lonely','dark','nostalgic'] as const).map(k => (
                  <div key={k} className="rounded-lg p-2 text-center"
                    style={{ background: '#ffffff05', border: '1px solid #ffffff08' }}>
                    <div className="text-xs font-bold" style={{ color: GOLD }}>
                      {preview.stats[k]}
                    </div>
                    <div className="text-xs mt-0.5 capitalize" style={{ color: '#4a4030' }}>{k}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <button onClick={() => setStep('form')}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: '#ffffff08', color: '#6b5f4a', border: '1px solid #ffffff0a' }}>
                  Regenerate
                </button>
                <button onClick={confirm}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d4a85332'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#d4a85322'; }}>
                  <span className="flex items-center justify-center gap-1.5">
                    <Check size={13} /> Add to showcase
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {error && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                  style={{ background: '#ff444415', border: '1px solid #ff444430', color: '#ff8888' }}>
                  <AlertCircle size={12} /> {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>
                    Song title *
                  </label>
                  <input value={title} onChange={e => setTitle(e.target.value)}
                    placeholder="e.g. Blinding Lights"
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                    onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                    onBlur={e => { e.target.style.borderColor = '#d4a85320'; }}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>
                    Artist *
                  </label>
                  <input value={artist} onChange={e => setArtist(e.target.value)}
                    placeholder="e.g. The Weeknd"
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                    onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                    onBlur={e => { e.target.style.borderColor = '#d4a85320'; }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>
                    Album
                  </label>
                  <input value={album} onChange={e => setAlbum(e.target.value)}
                    placeholder="e.g. After Hours"
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                    onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                    onBlur={e => { e.target.style.borderColor = '#d4a85320'; }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>
                    Year
                  </label>
                  <input value={year} onChange={e => setYear(e.target.value)}
                    placeholder="e.g. 2020"
                    type="number"
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                    onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                    onBlur={e => { e.target.style.borderColor = '#d4a85320'; }}
                  />
                </div>
              </div>

              <button onClick={generate}
                className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all mt-1"
                style={{ background: 'linear-gradient(135deg, #d4a85322, #d4a85318)', color: GOLD, border: '1px solid #d4a85340' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #d4a85335, #d4a85328)'; e.currentTarget.style.boxShadow = '0 0 24px #d4a85325'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #d4a85322, #d4a85318)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <Sparkles size={14} /> Generate Analysis with AI
              </button>

              <p className="text-center text-xs" style={{ color: '#3a3028' }}>
                Powered by Claude · Requires ANTHROPIC_API_KEY env var
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
