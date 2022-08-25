import { serverData } from "./firebase-setup.js"

serverData.forEach((usersData) => {
  console.log(Object.keys(usersData))
  console.log(Object.values(usersData))
})

export async function createProforma(userId, proforma) {}
export async function readProformasByUserId(userId) {}
export async function updateProforma(userId, proforma) {}
export async function deleteProforma(userId, proforma) {}

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
