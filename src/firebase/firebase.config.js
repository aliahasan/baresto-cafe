import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0W9ZEXUslVvFROXsMoLsEQUzI2GHEDgQ",
  authDomain: "baresto-cafe.firebaseapp.com",
  projectId: "baresto-cafe",
  storageBucket: "baresto-cafe.appspot.com",
  messagingSenderId: "128897156629",
  appId: "1:128897156629:web:0f88ab690c96ece79f301c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
