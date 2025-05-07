import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { db } from './config';

// Initialize Firebase app if not already initialized
const app = initializeApp({
  apiKey: "AIzaSyA8BkVJiqFHFv-i1ngVXk2UhY1jnCYBLMA",
  authDomain: "bw-health.firebaseapp.com",
  projectId: "bw-health",
  storageBucket: "bw-health.firebasestorage.app",
  messagingSenderId: "752649957694",
  appId: "1:752649957694:web:d8ef1b07af959533fe3c6f",
  measurementId: "G-19CV57FD17"
});

// Initialize Auth
export const auth = getAuth(app);

// Export auth types
export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
};
