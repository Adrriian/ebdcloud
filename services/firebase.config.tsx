// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEKMP18MsQpu1uwjJOE4xT-lCPIXBE_Kw",
  authDomain: "ebdcampo-e3611.firebaseapp.com",
  projectId: "ebdcampo-e3611",
  storageBucket: "ebdcampo-e3611.firebasestorage.app",
  messagingSenderId: "463323527085",
  appId: "1:463323527085:web:8aee14267d0cfe57b45324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)