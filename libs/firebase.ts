// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIiDZ6_h3Jv7WFDK3J3qRCr-htRSIXn_U",
  authDomain: "toko-set.firebaseapp.com",
  projectId: "toko-set",
  storageBucket: "toko-set.appspot.com",
  messagingSenderId: "601630815157",
  appId: "1:601630815157:web:3bc1fad87b2fb15e2c5ffc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
