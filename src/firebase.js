import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAz1o51QBab90Iz1DwEqkgcA7chnvXj6yc",
  authDomain: "line-clone-edce2.firebaseapp.com",
  projectId: "line-clone-edce2",
  storageBucket: "line-clone-edce2.appspot.com",
  messagingSenderId: "295175085561",
  appId: "1:295175085561:web:5c465d59db0921a1b0b128"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
