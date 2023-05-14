import "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBewql8KilCGQ1U0JPcGM09bRPz6Z7hPSw",
  authDomain: "loginpage-5b8b3.firebaseapp.com",
  projectId: "loginpage-5b8b3",
  storageBucket: "loginpage-5b8b3.appspot.com",
  messagingSenderId: "879894280836",
  appId: "1:879894280836:web:418bfbf4b9b9280df8a0d1",
  measurementId: "G-M6YJDJEGT4",
};

const firestoreData = initializeApp(firebaseConfig);
export const db = getFirestore(firestoreData);
