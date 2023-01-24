// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM0KWTJ--tJY_Vz19CWxsqydmettLfduc",
  authDomain: "firename-5ec32.firebaseapp.com",
  databaseURL: "https://firename-5ec32-default-rtdb.firebaseio.com",
  projectId: "firename-5ec32",
  storageBucket: "firename-5ec32.appspot.com",
  messagingSenderId: "186854819480",
  appId: "1:186854819480:web:3438b6661e04d50f85f2ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);