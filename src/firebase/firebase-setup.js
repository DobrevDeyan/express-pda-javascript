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
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// import {
//   getFunctions,
//   httpsCallable,
// } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js"
// console.log(getFunctions, httpsCallable)

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

// FIREBASE SETUP FOR RETRIEVING ALL USERS DATA
const querySnapshot = await getDocs(collection(db, "users"))
let usersData = []
querySnapshot.forEach((doc) => {
  usersData.push(doc.data())
})

// Must be moved to and id inserted when creating users profile to begin with

//working
const userData = getUserData()
const userRef = doc(db, "users", `${userData.id}`)
await updateDoc(userRef, { uid: userData.id })
//working

async function updateUserProfile() {
  const userData = getUserData()
  const userRef = doc(db, "proformas", `${userData.id}`)
  await updateDoc(userRef, { timestamp: serverTimestamp() })
  // await updateDoc(userRef, {})
  // return userRef.setDoc(newData, {
  //   merge: true,
  // })
}
// updateUserProfile()

const serverData = Array.from(usersData)

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
  serverTimestamp,
  deleteDoc,
  serverData,
  auth,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
