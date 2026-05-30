import { useState } from 'react';
import { X, Lock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const GOLD = '#d4a853';

interface Props { onClose: () => void; onSuccess: () => void; }

export default function AdminLoginModal({ onClose, onSuccess }: Props) {
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
      onSuccess();
      onClose();
    } catch {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85330', boxShadow: '0 24px 80px #00000090' }}>

        <div className="px-6 pt-6 pb-4 flex items-center justify-between" style={{ borderBottom: '1px solid #d4a85318' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#d4a85318', border: '1px solid #d4a85330' }}>
              <Lock size={14} style={{ color: GOLD }} />
            </div>
            <h2 className="font-bold text-sm" style={{ color: '#f0ead8' }}>Admin Login</h2>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#ffffff08', color: '#5a4f3a' }}>
            <X size={14} />
          </button>
        </div>

        <form onSubmit={submit} className="px-6 py-5 flex flex-col gap-3">
          {error && <div className="text-xs px-3 py-2 rounded-lg" style={{ background: '#ff444415', border: '1px solid #ff444430', color: '#ff8888' }}>{error}</div>}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#5a4f3a' }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
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
            className="w-full py-3 rounded-xl text-sm font-bold mt-1 transition-all"
            style={{ background: '#d4a85322', color: GOLD, border: '1px solid #d4a85340', opacity: loading ? 0.6 : 1 }}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
