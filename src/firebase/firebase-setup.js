import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import {
  getFirestore,
  setDoc,
  getDocs,
  updateDoc,
  doc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"

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
const querySnapshot = await getDocs(collection(db, "users"))
let usersData = []
querySnapshot.forEach((doc) => {
  usersData.push(doc.data())
  console.log(`${doc.id} => ${doc.data()}`)
  //   console.log({ ...doc.data() })
  //   console.log(typeof { ...doc.data() })
})

const serverData = Array.from(usersData)
export { serverData }

// const proformaRef = doc(db, "users", "xj9trMyxaNfbFFVWwdlx")
// await updateDoc(proformaRef, {
//   "proformas.breadth": "2000",
// })

// await setDoc(doc(db, "users", ""), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   })
//   console.log("Document written with ID: ", docRef.id)
// } catch (e) {
//   console.error("Error adding document: ", e)
// }
