
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPu7VUr8tFPwemB9Tl72c2tPeoW-WmZEI",
  authDomain: "fir-d0999.firebaseapp.com",
  projectId: "fir-d0999",
  storageBucket: "fir-d0999.firebasestorage.app",
  messagingSenderId: "432311243826",
  appId: "1:432311243826:web:908e0051513408c6c0182b",
  measurementId: "G-7LRF22M4YG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export { db } ;

