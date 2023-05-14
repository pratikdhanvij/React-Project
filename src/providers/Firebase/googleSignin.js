import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBewql8KilCGQ1U0JPcGM09bRPz6Z7hPSw",
  authDomain: "loginpage-5b8b3.firebaseapp.com",
  projectId: "loginpage-5b8b3",
  storageBucket: "loginpage-5b8b3.appspot.com",
  messagingSenderId: "879894280836",
  appId: "1:879894280836:web:418bfbf4b9b9280df8a0d1",
  measurementId: "G-M6YJDJEGT4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const SignInWithGoogle = () => {
 
 return signInWithPopup(auth, provider)

};
export default SignInWithGoogle;
