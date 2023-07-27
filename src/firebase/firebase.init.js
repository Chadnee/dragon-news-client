// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env. VITE_PROJECTID,
  storageBucket: import.meta.env. VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
/**
 * apiKey: "AIzaSyB9zV2HZogvFHqNZePkboHK8MiDt9sSIYU",
  authDomain: "dragon-news-3ee50.firebaseapp.com",
  projectId: "dragon-news-3ee50",
  storageBucket: "dragon-news-3ee50.appspot.com",
  messagingSenderId: "1039091761621",
  appId: "1:1039091761621:web:267b071a38663e4fa77d5c"
 */