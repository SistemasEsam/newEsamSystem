import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;


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

export {
  database
}