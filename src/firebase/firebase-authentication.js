import { setDoc, doc, db } from "./firebase-setup.js"

// SET NEWLY REGISTERED USER IN FIRESTORE COLLECTION
export async function setUserInDatabase(registeredUser) {
  await setDoc(doc(db, "users", `${registeredUser.user.uid}`), {
    email: registeredUser.user.email,
    name: registeredUser.user.displayName,
    verified: registeredUser.user.emailVerified,
    uid: registeredUser.user.uid,
  })
}

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
