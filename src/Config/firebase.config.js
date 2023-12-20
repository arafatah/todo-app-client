// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMGGpKxHUGxhLced_VyjwsyZ9DAfOs-Y",
  authDomain: "todo-project-auth.firebaseapp.com",
  projectId: "todo-project-auth",
  storageBucket: "todo-project-auth.appspot.com",
  messagingSenderId: "787425413980",
  appId: "1:787425413980:web:531aff742bfb50e0964f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;