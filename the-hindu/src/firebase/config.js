// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBe4W39xZ1V42Z9448QoWU08Fn1o2Q7sKw",
  authDomain: "the-hindu-bfefa.firebaseapp.com",
  projectId: "the-hindu-bfefa",
  storageBucket: "the-hindu-bfefa.appspot.com",
  messagingSenderId: "487048245603",
  appId: "1:487048245603:web:cb97a36e775e772c4ce356"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};