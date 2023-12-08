import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWiIycnPKnMnkHXaJ3X7RXjHTIzs5VF-k",
  authDomain: "coder-house-7944c.firebaseapp.com",
  projectId: "coder-house-7944c",
  storageBucket: "coder-house-7944c.appspot.com",
  messagingSenderId: "794441175682",
  appId: "1:794441175682:web:32e2df1d85662f4c8cda9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)