import { setDoc, doc, db } from "./firebase-setup.js"
export async function setUserInDatabase(registeredUser) {
  await setDoc(doc(db, "users", `${registeredUser.user.uid}`), {
    email: registeredUser.user.email,
    name: registeredUser.user.displayName,
    verified: registeredUser.user.emailVerified,
    uid: registeredUser.user.uid,
  })

  // const userRef = doc(db, "users", `${user.id}`)
  // await updateDoc(userRef, { uid: user.id })
}
