// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR8IPEu37Bl-6-Tbsek5bIDE9UAMh9hRQ",
  authDomain: "the-news-dragon-client-ae77a.firebaseapp.com",
  projectId: "the-news-dragon-client-ae77a",
  storageBucket: "the-news-dragon-client-ae77a.appspot.com",
  messagingSenderId: "687874265293",
  appId: "1:687874265293:web:cf6a6e8505600df30d9984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;