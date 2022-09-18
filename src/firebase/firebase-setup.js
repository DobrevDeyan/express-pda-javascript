import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { getUserData } from "../utilities/util.js"
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

//INITIALIZING FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCRIQJA0DuU10mw29zGWsyp6lfMwvlbtrg",
  authDomain: "shippingproject-1c33a.firebaseapp.com",
  projectId: "shippingproject-1c33a",
  storageBucket: "shippingproject-1c33a.appspot.com",
  messagingSenderId: "627951103339",
  appId: "1:627951103339:web:5e6bb7b8e61756c4a2b02e",
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  app,
  db,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  addDoc,
  serverTimestamp,
  deleteDoc,
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
