import { validEmailCheck } from "./email-validation.js"
// import { validEmailCheck } from "./firebase-setup.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"

// EMAIL VALIDATION
const input = document.getElementById("email")
input.addEventListener("change", validEmailCheck(input))

// FIREBASE SETUP FOR RETRIEVING USER'S DATA
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
const colRef = collection(db, "users")

getDocs(colRef)
  .then((snapshot) => {
    let usersData = []
    snapshot.docs.forEach((doc) => {
      usersData.push({ ...doc.data(), id: doc.id })
    })
    console.log(usersData)
  })
  .catch((error) => {
    alert(error.message)
  })
