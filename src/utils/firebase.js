// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYjoAj8qBy-OWzzsIMU_s9P_T4NAws4cA",
  authDomain: "netflix-gpt-6d586.firebaseapp.com",
  projectId: "netflix-gpt-6d586",
  storageBucket: "netflix-gpt-6d586.firebasestorage.app",
  messagingSenderId: "959754859868",
  appId: "1:959754859868:web:74487496ffedb08d243d99",
  measurementId: "G-5HTCNCBPM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
