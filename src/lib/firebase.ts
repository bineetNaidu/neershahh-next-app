// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(firebase_app);

export const db = getFirestore(firebase_app);

export const handleContactMeForm = async (data: {
  name: string;
  email: string;
}) => {
  const r = collection(db, 'contact_us_reponses');

  const d = await addDoc(r, data);
  return d.id;
};

type NewUserData = {
  uid: string;
  name: string;
  phone_number: string | null;
  email: string;
  avatar: string;
};

export const handleAddNewUser = async (data: NewUserData) => {
  const ref = collection(db, 'users');

  try {
    const docSnap = await getDoc(doc(db, 'users', data.uid));

    if (docSnap.exists()) {
      return true;
    } else {
      await setDoc(doc(ref, data.uid), data, { merge: true });

      return true;
    }
  } catch (error) {
    console.log(error);

    return false;
  }
};

export const GoogleProvider = new GoogleAuthProvider();

export const auth = getAuth(firebase_app);

export default firebase_app;
