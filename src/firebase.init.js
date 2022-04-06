// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALKLxm-i-StGn0tLNcUj18xaUDW6lskfA",
  authDomain: "fir-auth-4c69e.firebaseapp.com",
  projectId: "fir-auth-4c69e",
  storageBucket: "fir-auth-4c69e.appspot.com",
  messagingSenderId: "563376345900",
  appId: "1:563376345900:web:fb5e26fd4d83a063935289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app