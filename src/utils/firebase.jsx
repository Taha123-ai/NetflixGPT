// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD4GQLgtSkYSdGLdwBeHqar6CPNvOWk-8A",
  authDomain: "netflixgpt-ccb87.firebaseapp.com",
  projectId: "netflixgpt-ccb87",
  storageBucket: "netflixgpt-ccb87.firebasestorage.app",
  messagingSenderId: "63090127595",
  appId: "1:63090127595:web:b066e276f158baa71a44ae",
  measurementId: "G-QPNHYXMYQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
