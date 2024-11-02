import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyD5ecPVaA-F2wrFDz7FI6Qg0ofDTA4UOXE",
  authDomain: "appointment-b12d4.firebaseapp.com",
  projectId: "appointment-b12d4",
  storageBucket: "appointment-b12d4.firebasestorage.app",
  messagingSenderId: "992272876834",
  appId: "1:992272876834:web:36da9197fc1bd509a8917b",
  measurementId: "G-E3ELEW5JQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { db, auth }; // Export auth