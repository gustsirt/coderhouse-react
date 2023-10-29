// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCmc-AVOFbLxIBZ8P0syBpIwNooOLFMED8",
  authDomain: "tienda-joubert.firebaseapp.com",
  projectId: "tienda-joubert",
  storageBucket: "tienda-joubert.appspot.com",
  messagingSenderId: "887679983724",
  appId: "1:887679983724:web:122c4fb973adbb548db849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)