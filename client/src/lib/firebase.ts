import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjSL-0D0Cqo3JmZBFJ9u-jkAuu9SooWLk",
  authDomain: "financeai-9b7d6.firebaseapp.com",
  projectId: "financeai-9b7d6",
  storageBucket: "financeai-9b7d6.firebasestorage.app",
  messagingSenderId: "592211291977",
  appId: "1:592211291977:web:be540ee54d1217cbe5f498",
  measurementId: "G-YV76RH8BK5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;