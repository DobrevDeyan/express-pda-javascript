import {
  setDoc,
  doc,
  db,
  updateDoc,
  serverTimestamp,
  deleteDoc,
  getDocs,
  query,
  collection,
  where,
  auth,
} from "./firebase-setup.js"

export async function createProforma(pdaData, generatedVarnaEastProforma) {
  const user = JSON.parse(sessionStorage.userData) // Issue here must see

  generatedVarnaEastProforma.id = user.id
  let docName =
    user.id +
    pdaData.terminal +
    pdaData.type +
    pdaData.operation +
    pdaData.condition +
    pdaData.grt +
    pdaData.loa +
    pdaData.hours
  let proformaId = createDocName(docName)

  await setDoc(doc(db, "proformas", proformaId), {
    ...generatedVarnaEastProforma,
    proformaId,
    created: serverTimestamp(),
  })
  // Hashing function for avoiding duplicate pda entries in db
  function createDocName(string) {
    var a = 1,
      c = 0,
      h,
      o
    if (string) {
      a = 0
      for (h = string.length - 1; h >= 0; h--) {
        o = string.charCodeAt(h)
        a = ((a << 6) & 268435455) + o + (o << 14)
        c = a & 266338304
        a = c !== 0 ? a ^ (c >> 21) : a
      }
    }
    return String(a)
  }
}
export async function readProformasByUserId(userId) {
  const q = query(collection(db, "proformas"), where("id", "==", userId))
  const querySnapshot = await getDocs(q)
  return querySnapshot
}
export async function updateProforma(userId, proforma) {}

export async function deleteProforma(proformaId) {
  deleteButton.addEventListener("click", deleteProforma(doc.data().proformaId))

  let confirmation = window.confirm(
    "Are you sure you want to delete the document ?"
  )
  if (confirmation) {
    try {
      await deleteDoc(doc(db, "proformas", proformaId))
      alert("Entry successfully deleted.")
    } catch (error) {
      alert("Error deleting document")
    }
  }
}

// SET NEWLY REGISTERED USER IN FIRESTORE COLLECTION

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

// await setDoc(doc(db, "users", `${user.uid}`), {
//   email: user.email,
//   name: user.displayName,
//   verified: user.emailVerified,
// })

// Must be moved to and id inserted when creating users profile to begin with

//working
// const userData = getUserData()
// const userRef = doc(db, "users", `${userData.id}`)
// await updateDoc(userRef, { uid: userData.id })
//working
