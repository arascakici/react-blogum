import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Aşağıdaki bilgileri Firebase Console'dan alıp buraya yapıştırın.
const firebaseConfig = {
  apiKey: "AIzaSyBFOpP-N0kE1LQJgFtXmYKDww9nZAZQDTI",
  authDomain: "aras-yks.firebaseapp.com",
  projectId: "aras-yks",
  storageBucket: "aras-yks.firebasestorage.app",
  messagingSenderId: "624008449205",
  appId: "1:624008449205:web:8d90399b71bff8c7e082fc",
  measurementId: "G-56YM7TPQ1V"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore veritabanını dışa aktar
export const db = getFirestore(app);
