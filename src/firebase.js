// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xByXBZJBuLghrxuAwrXu_o2QlWtsyg8",
  authDomain: "netflix-cb9e6.firebaseapp.com",
  projectId: "netflix-cb9e6",
  storageBucket: "netflix-cb9e6.appspot.com",
  messagingSenderId: "298130629857",
  appId: "1:298130629857:web:17e80243fe8bf7ad00c3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, app, auth }