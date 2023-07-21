// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_cDtoTOyDvtBusIzf6JZfF-AHUoo5diY",
  authDomain: "sistema-esam.firebaseapp.com",
  databaseURL: "https://sistema-esam-default-rtdb.firebaseio.com",
  projectId: "sistema-esam",
  storageBucket: "sistema-esam.appspot.com",
  messagingSenderId: "390991094467",
  appId: "1:390991094467:web:960715b53d83fa834bb876",
  measurementId: "G-BHXCF4XMNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);