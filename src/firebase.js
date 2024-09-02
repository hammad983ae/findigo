import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2WYZKCQ4Tu6s0PlbUlNftsEbSMpNGPiU",
    authDomain: "web-main-1d42e.firebaseapp.com",
    projectId: "web-main-1d42e",
    storageBucket: "web-main-1d42e.appspot.com",
    messagingSenderId: "217241118980",
    appId: "1:217241118980:web:030816458a3a19dcbc0851"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
