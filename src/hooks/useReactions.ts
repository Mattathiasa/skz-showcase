import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc, increment, collection, addDoc, query, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const REACTION_EMOJIS = ['🔥', '😭', '💔', '✨', '💀', '🫶', '😤', '🌊'] as const;

export interface HitsWhenEntry {
  id: string;
  text: string;
}

export function useReactions(songId: string) {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [hitsWhen, setHitsWhen] = useState<HitsWhenEntry[]>([]);
  const [userReacted, setUserReacted] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored: string[] = JSON.parse(localStorage.getItem(`rxn_${songId}`) ?? '[]');
    setUserReacted(new Set(stored));

    const unsub = onSnapshot(doc(db, 'reactions', songId), snap => {
      if (snap.exists()) setCounts(snap.data() as Record<string, number>);
    });

    const q = query(collection(db, 'reactions', songId, 'hitsWhen'), orderBy('createdAt', 'desc'), limit(8));
    getDocs(q).then(snap => {
      setHitsWhen(snap.docs.map(d => ({ id: d.id, text: (d.data() as { text: string }).text })));
    });

    return unsub;
  }, [songId]);

  const react = async (emoji: string) => {
    if (userReacted.has(emoji)) return;

    setCounts(prev => ({ ...prev, [emoji]: (prev[emoji] ?? 0) + 1 }));
    setUserReacted(prev => {
      const next = new Set([...prev, emoji]);
      localStorage.setItem(`rxn_${songId}`, JSON.stringify([...next]));
      return next;
    });

    await setDoc(doc(db, 'reactions', songId), { [emoji]: increment(1) }, { merge: true });
  };

  const addHitsWhen = async (text: string) => {
    if (!text.trim() || submitting) return;
    setSubmitting(true);
    const clean = text.trim().slice(0, 120);
    try {
      const ref = await addDoc(collection(db, 'reactions', songId, 'hitsWhen'), {
        text: clean,
        createdAt: serverTimestamp(),
      });
      setHitsWhen(prev => [{ id: ref.id, text: clean }, ...prev].slice(0, 8));
    } finally {
      setSubmitting(false);
    }
  };

  return { counts, hitsWhen, userReacted, react, addHitsWhen, submitting };
}
