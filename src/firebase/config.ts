import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8BkVJiqFHFv-i1ngVXk2UhY1jnCYBLMA",
  authDomain: "bw-health.firebaseapp.com",
  projectId: "bw-health",
  storageBucket: "bw-health.firebasestorage.app",
  messagingSenderId: "752649957694",
  appId: "1:752649957694:web:d8ef1b07af959533fe3c6f",
  measurementId: "G-19CV57FD17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
