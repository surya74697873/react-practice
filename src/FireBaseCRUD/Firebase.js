
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAx5I4UhTfa_nRGjAMzqEgjyd07A-jVxQU",
  authDomain: "fir-crud-b4756.firebaseapp.com",
  projectId: "fir-crud-b4756",
  storageBucket: "fir-crud-b4756.firebasestorage.app",
  messagingSenderId: "822456831781",
  appId: "1:822456831781:web:aa21fbf42009f6d33dd4cc",
  measurementId: "G-7S14WEYE2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFireStore();

export { db } ;