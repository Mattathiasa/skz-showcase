import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
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
      const songs = snapshot.docs.map(d => ({
        firestoreId: d.id,
        ...(d.data() as FirebaseSong),
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

  const updateSong = async (firestoreId: string, updates: Partial<Song>) => {
    await updateDoc(doc(db, 'songs', firestoreId), updates as Record<string, unknown>);
  };

  const deleteSong = async (firestoreId: string) => {
    await deleteDoc(doc(db, 'songs', firestoreId));
  };

  return { firebaseSongs, loading, saveSong, updateSong, deleteSong };
}
