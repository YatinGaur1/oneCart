import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authonecart-b5dd9.firebaseapp.com",
  projectId: "authonecart-b5dd9",
  storageBucket: "authonecart-b5dd9.firebasestorage.app",
  messagingSenderId: "962141836208",
  appId: "1:962141836208:web:e11fd6b0a396f0f8c8fc75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()

export{auth,provider}