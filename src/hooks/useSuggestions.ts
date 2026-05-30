import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface Suggestion {
  id: string;
  title: string;
  artist: string;
  album?: string;
  year?: string;
  reason?: string;
  submittedAt: number;
}

export function useSuggestions(isAdmin: boolean) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, 'suggestions'), orderBy('submittedAt', 'desc'));
    const unsub = onSnapshot(q, snapshot => {
      setSuggestions(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Suggestion)));
    });
    return unsub;
  }, [isAdmin]);

  const submitSuggestion = async (data: Omit<Suggestion, 'id' | 'submittedAt'>) => {
    await addDoc(collection(db, 'suggestions'), {
      ...data,
      submittedAt: serverTimestamp(),
    });
  };

  const deleteSuggestion = async (id: string) => {
    await deleteDoc(doc(db, 'suggestions', id));
  };

  return { suggestions, submitSuggestion, deleteSuggestion };
}
