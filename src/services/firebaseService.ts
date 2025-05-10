import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, Firestore } from 'firebase/firestore';
import { getAuth, signInAnonymously, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAAkzNC5nnyK-HLZgeK1AJVreMn4eRMey4",
  authDomain: "adlink-pro.firebaseapp.com",
  databaseURL: "https://adlink-pro-default-rtdb.firebaseio.com",
  projectId: "adlink-pro",
  storageBucket: "adlink-pro.firebasestorage.app",
  messagingSenderId: "435385934174",
  appId: "1:435385934174:web:b80e834689510382d52fcf"
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

export const initializeFirebase = () => {
  try {
    if (!app) {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      db = getFirestore(app);
    }
    return { app, auth, db };
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
  }
};

export const voteForMovie = async (movieId: string) => {
  try {
    if (!auth?.currentUser) {
      await signInAnonymously(auth!);
    }

    const userId = auth!.currentUser!.uid;
    const voteRef = doc(db!, 'votes', userId);
    const voteDoc = await getDoc(voteRef);

    if (voteDoc.exists()) {
      const votes = voteDoc.data() as Record<string, boolean>;
      await setDoc(voteRef, { ...votes, [movieId]: true });
    } else {
      await setDoc(voteRef, { [movieId]: true });
    }
  } catch (error) {
    console.error('Error voting for movie:', error);
    throw error;
  }
};

export const hasVotedForMovie = async (movieId: string): Promise<boolean> => {
  try {
    if (!auth?.currentUser) {
      await signInAnonymously(auth!);
    }

    const userId = auth!.currentUser!.uid;
    const voteRef = doc(db!, 'votes', userId);
    const voteDoc = await getDoc(voteRef);

    if (voteDoc.exists()) {
      const votes = voteDoc.data() as Record<string, boolean>;
      return !!votes[movieId];
    }

    return false;
  } catch (error) {
    console.error('Error checking vote status:', error);
    return false;
  }
}; 