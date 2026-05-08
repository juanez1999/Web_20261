// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnKDK8Lcs80hX1s9TqBFUukcbQSjqB68o",
  authDomain: "pdg-emons.firebaseapp.com",
  projectId: "pdg-emons",
  storageBucket: "pdg-emons.firebasestorage.app",
  messagingSenderId: "279739295643",
  appId: "1:279739295643:web:0f57bbc8718373697be33e",
  measurementId: "G-M614P2PMKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
