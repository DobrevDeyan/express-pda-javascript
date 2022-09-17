import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"
import { getUserData } from "../utilities/util.js"
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"

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
async function updateUserProfile() {
  const userData = getUserData()
  const userRef = doc(db, "users", `${userData.id}`)
  await updateDoc(userRef, {})
  // return userRef.setDoc(newData, {
  //   merge: true,
  // })
}
// updateUserProfile()

// const userData = getUserData()
// const userRef = doc(db, "users", `${userData.id}`)
// await updateDoc(userRef, { uid: userData.id })

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
  serverData,
  auth,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
