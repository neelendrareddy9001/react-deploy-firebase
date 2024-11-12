import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvlSg_uWXbVU-IR5qg0OaDfrj1OO2aka8",
  authDomain: "piyush-garg-56601.firebaseapp.com",
  databaseURL:
    "https://piyush-garg-56601-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "piyush-garg-56601",
  storageBucket: "piyush-garg-56601.firebasestorage.app",
  messagingSenderId: "894159250543",
  appId: "1:894159250543:web:c6570f3a3db117c83f599a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
