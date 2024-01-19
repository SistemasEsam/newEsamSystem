import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { getStorage } from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyC09OKEiODfCzPfC-BFv8pm3LG_9uAVigM",
  authDomain: "esam-system-19738.firebaseapp.com",
  projectId: "esam-system-19738",
  storageBucket: "esam-system-19738.appspot.com",
  messagingSenderId: "553497948923",
  appId: "1:553497948923:web:fc043af350df283229365e"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app);

export {
  database,
  auth,
  signInWithEmailAndPassword,
  storage
}