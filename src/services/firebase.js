// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0RDdR7m196GgFbv7f_Q1LsH9BfTrvf2A",
  authDomain: "ecommersreactcoder.firebaseapp.com",
  projectId: "ecommersreactcoder",
  storageBucket: "ecommersreactcoder.appspot.com",
  messagingSenderId: "369471777851",
  appId: "1:369471777851:web:186229d8d6d9103943c01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
