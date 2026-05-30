import { useState } from 'react';
import { X, Music, Send, Check } from 'lucide-react';
import { useSuggestions } from '../hooks/useSuggestions';

const GOLD = '#d4a853';

interface Props { onClose: () => void; }

export default function SuggestSongModal({ onClose }: Props) {
  const { submitSuggestion } = useSuggestions(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const [reason, setReason] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!title.trim() || !artist.trim()) { setError('Title and artist are required'); return; }
    setSubmitting(true);
    try {
      await submitSuggestion({ title: title.trim(), artist: artist.trim(), album: album.trim(), year: year.trim(), reason: reason.trim() });
      setDone(true);
      setTimeout(onClose, 1500);
    } catch {
      setError('Failed to submit. Try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85330', boxShadow: '0 24px 80px #00000090' }}>

        <div className="px-6 pt-6 pb-4 flex items-center justify-between" style={{ borderBottom: '1px solid #d4a85318' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#d4a85318', border: '1px solid #d4a85330' }}>
              <Music size={14} style={{ color: GOLD }} />
            </div>
            <div>
              <h2 className="font-bold text-sm" style={{ color: '#f0ead8' }}>Suggest a Song</h2>
              <p className="text-xs" style={{ color: '#5a4f3a' }}>Admin will review and add it</p>
            </div>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#ffffff08', color: '#5a4f3a' }}>
            <X size={14} />
          </button>
        </div>

        <div className="px-6 py-5">
          {done ? (
            <div className="flex flex-col items-center py-8 gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4a85320', border: '1px solid #d4a85340' }}>
                <Check size={22} style={{ color: GOLD }} />
              </div>
              <p className="font-semibold text-sm" style={{ color: '#f0ead8' }}>Suggestion submitted!</p>
              <p className="text-xs text-center" style={{ color: '#5a4f3a' }}>The admin will review and add it soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {error && (
                <div className="text-xs px-3 py-2 rounded-lg" style={{ background: '#ff444415', border: '1px solid #ff444430', color: '#ff8888' }}>
                  {error}
                </div>
              )}

              {[
                { label: 'Song title *', value: title, set: setTitle, placeholder: 'e.g. Blinding Lights', full: true },
                { label: 'Artist *', value: artist, set: setArtist, placeholder: 'e.g. The Weeknd', full: true },
                { label: 'Album', value: album, set: setAlbum, placeholder: 'Optional', full: false },
                { label: 'Year', value: year, set: setYear, placeholder: 'Optional', full: false },
              ].map(f => (
                <div key={f.label} className={f.full ? '' : 'inline-block w-full'}>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>{f.label}</label>
                  <input value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                    onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                    onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
                </div>
              ))}

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>Why should it be added?</label>
                <textarea value={reason} onChange={e => setReason(e.target.value)} placeholder="Tell us why this song fits the vibe..."
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none"
                  style={{ background: '#0a0a12', border: '1px solid #d4a85320', color: '#f0ead8' }}
                  onFocus={e => { e.target.style.borderColor = '#d4a85345'; }}
                  onBlur={e => { e.target.style.borderColor = '#d4a85320'; }} />
              </div>

              <button onClick={submit} disabled={submitting}
                className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-1 transition-all"
                style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: submitting ? 0.6 : 1 }}>
                <Send size={13} /> {submitting ? 'Submitting...' : 'Submit Suggestion'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
