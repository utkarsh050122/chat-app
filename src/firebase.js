// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcrB-qecJ4wzaE4ew3zOyEV42Gj-G11pk",
  authDomain: "chat-app-40530.firebaseapp.com",
  projectId: "chat-app-40530",
  storageBucket: "chat-app-40530.appspot.com",
  messagingSenderId: "99778083278",
  appId: "1:99778083278:web:3446d064e2d9cb8a48539f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();