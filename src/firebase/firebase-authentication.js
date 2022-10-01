import {
  setDoc,
  doc,
  db,
  updateDoc,
  query,
  collection,
  getDocs,
  getDoc,
  where,
} from "./firebase-setup.js"
import { getUserData } from "../utilities/util.js"

// SET NEWLY REGISTERED USER IN FIRESTORE COLLECTION
export async function setUserInDatabase(registeredUser) {
  await setDoc(doc(db, "users", `${registeredUser.user.uid}`), {
    email: registeredUser.user.email,
    name: registeredUser.user.displayName,
    verified: registeredUser.user.emailVerified,
    uid: registeredUser.user.uid,
  }).then(() => {
    const userRef = doc(db, "users", `${registeredUser.user.uid}`)
    updateDoc(userRef, {
      company: "company-name",
      phone: "phone-number",
      address: "company-address",
      name: "user-name",
    })
  })
}

export async function getFirestoreUserData() {
  const user = getUserData()
  const firebaseId = user.id
  const data = await getDoc(doc(db, "users", firebaseId)).then((docSnap) => {
    return docSnap.data()
  })
  return data
}

export async function updateUserDetails(userDetails) {
  const user = getUserData()
  const firebaseId = user.id
  const userRef = doc(db, "users", `${firebaseId}`)
  updateDoc(userRef, {
    name: userDetails.userName,
    phone: userDetails.phoneNumber,
    company: userDetails.company,
    address: userDetails.address,
  })
}
export async function accountStatistics() {}
// getFirestoreUserData()
// where("id", "==", userId)

// await setDoc(doc(db, "users", `${user.uid}`), {
//   email: user.email,
//   name: user.displayName,
//   verified: user.emailVerified,
// })

//
// const userRef = doc(db, "users", `${user.uid}`)
// await updateDoc(userRef, {
//   proformas: [{ grt: 2, loa: 3, nrt: 3 }],
// })

// const userData = getUserData()
// const userRef = doc(db, "users", `${userData.id}`)
// await updateDoc(userRef, { uid: userData.id })

// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
