import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Song } from '../data/songs';

export interface FirebaseSong extends Song {
  firestoreId?: string;
  addedAt?: number;
}

export function useFirebaseSongs() {
  const [firebaseSongs, setFirebaseSongs] = useState<FirebaseSong[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'songs'), orderBy('addedAt', 'desc'));
    const unsub = onSnapshot(q, snapshot => {
      const songs = snapshot.docs.map(doc => ({
        firestoreId: doc.id,
        ...(doc.data() as FirebaseSong),
      }));
      setFirebaseSongs(songs);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  const saveSong = async (song: Song) => {
    await addDoc(collection(db, 'songs'), {
      ...song,
      addedAt: serverTimestamp(),
    });
  };

  return { firebaseSongs, loading, saveSong };
}
