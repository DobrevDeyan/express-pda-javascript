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
// const user = auth.currentUser
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

// serverData.forEach((usersData) => {
//   console.log(Object.keys(usersData))
//   console.log(Object.values(usersData))
// })

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

// }

// IMPORT

// import { Injectable } from '@angular/core';
// import {
//   doc,
//   setDoc,
//   getFirestore,
//   getDocs,
//   collection,
//   query,
//   where,
//   updateDoc,
//   deleteField,
//   deleteDoc,
// } from 'firebase/firestore';
// import { AuthService } from '../services/auth.service';

// document.addEventListener('click', async (e) => {
//   if (e.classList.contains('proforma-delete')) {
//     let proformaIdToDelete = e.target.dataset.proformaId
//     // Deletes a proforma from the DB with ID = proformaIdToDelete
//     await deleteProforma(proformaIdToDelete)
//     // Fetch the new list from DB and print it
//     // DONT MANUALLY DELETE DOM NODES
//     renderList()
//   }
// })

//Delete individual proforma entry: removing it from the DOM; removing it from DB
// let db = getFirestore();
// const storedProformas = document.querySelector('#displayStoredProformas');
// const q = query(
//   collection(db, 'proformas'),
//   where('uid', '==', this.authService.userData.uid)
// );
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // console.log(doc);
// });

// await deleteDoc(doc(db, 'cities', 'DC'));

//   await deleteDoc(doc(db, 'proformas', hashedDocName), {
//     vesselType: options.vesselType,
//     operations: options.operations,
//     specialState: options.specialState,
//     grossTonnage: options.grossTonnage,
//     lengthOverall: options.lengthOverall,
//     hoursAtBerth: options.hoursAtBerth,
//     uid: this.authService.userData.uid,
//   });
