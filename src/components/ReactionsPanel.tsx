import { useState } from 'react';
import { Send } from 'lucide-react';
import { useReactions, REACTION_EMOJIS } from '../hooks/useReactions';

interface Props {
  songId: string;
  accentColor: string;
}

export default function ReactionsPanel({ songId, accentColor }: Props) {
  const { counts, hitsWhen, userReacted, react, addHitsWhen, submitting } = useReactions(songId);
  const [text, setText] = useState('');

  const totalReactions = Object.values(counts).reduce((s, v) => s + v, 0);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    await addHitsWhen(text);
    setText('');
  };

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0e0e18, #0b0b14)', border: '1px solid #d4a85320' }}>

      {/* Emoji reactions */}
      <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid #1a1a28' }}>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>Reactions</p>
          {totalReactions > 0 && (
            <span className="text-xs" style={{ color: '#3a3020' }}>{totalReactions} total</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {REACTION_EMOJIS.map(emoji => {
            const count = counts[emoji] ?? 0;
            const reacted = userReacted.has(emoji);
            return (
              <button key={emoji} onClick={() => react(emoji)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all"
                style={{
                  background: reacted ? accentColor + '20' : '#ffffff07',
                  border: `1px solid ${reacted ? accentColor + '50' : '#ffffff10'}`,
                  boxShadow: reacted ? `0 0 12px ${accentColor}18` : 'none',
                  cursor: reacted ? 'default' : 'pointer',
                  transform: reacted ? 'scale(1)' : undefined,
                }}
                onMouseEnter={e => { if (!reacted) { e.currentTarget.style.background = '#ffffff12'; e.currentTarget.style.transform = 'scale(1.08)'; } }}
                onMouseLeave={e => { if (!reacted) { e.currentTarget.style.background = '#ffffff07'; e.currentTarget.style.transform = 'scale(1)'; } }}>
                <span>{emoji}</span>
                {count > 0 && (
                  <span className="text-xs font-bold" style={{ color: reacted ? accentColor : '#5a4f3a' }}>{count}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hits when */}
      <div className="px-6 pt-5 pb-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
          This song hits when...
        </p>

        {hitsWhen.length > 0 && (
          <div className="flex flex-col gap-2 mb-4">
            {hitsWhen.map(entry => (
              <div key={entry.id} className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
                style={{ background: '#0a0a12', border: '1px solid #1a1a28' }}>
                <span className="text-xs mt-0.5 shrink-0" style={{ color: accentColor }}>›</span>
                <p className="text-xs leading-relaxed" style={{ color: '#8a7860' }}>{entry.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSubmit(); }}
            placeholder="...you're driving alone at night"
            maxLength={120}
            className="flex-1 px-3 py-2.5 rounded-xl text-xs outline-none"
            style={{ background: '#0a0a12', border: '1px solid #1e1e2e', color: '#c8b898' }}
            onFocus={e => { e.target.style.borderColor = accentColor + '50'; }}
            onBlur={e => { e.target.style.borderColor = '#1e1e2e'; }}
          />
          <button onClick={handleSubmit} disabled={!text.trim() || submitting}
            className="px-3 py-2.5 rounded-xl transition-all shrink-0"
            style={{
              background: text.trim() ? accentColor + '20' : '#ffffff06',
              border: `1px solid ${text.trim() ? accentColor + '45' : '#ffffff08'}`,
              color: text.trim() ? accentColor : '#3a3020',
              cursor: !text.trim() || submitting ? 'not-allowed' : 'pointer',
            }}>
            <Send size={13} />
          </button>
        </div>
        <p className="text-xs mt-1.5 text-right" style={{ color: '#2a2018' }}>{text.length}/120</p>
      </div>
    </div>
  );
}
