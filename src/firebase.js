// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ibAXqHmVs_3D9-GGwnH41OyLV7tweGg",
  authDomain: "login-firebase-477f2.firebaseapp.com",
  projectId: "login-firebase-477f2",
  storageBucket: "login-firebase-477f2.appspot.com",
  messagingSenderId: "914854878574",
  appId: "1:914854878574:web:9a535b86b7901fe291b57f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;