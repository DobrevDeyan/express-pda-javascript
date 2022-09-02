import {
  serverData,
  setDoc,
  doc,
  db,
  auth,
  updateDoc,
} from "./firebase-setup.js"
import { getUserData } from "../utilities/util.js"

export async function createProforma(userId, proforma) {}
export async function readProformasByUserId(userId) {}
export async function updateProforma(userId, proforma) {}
export async function deleteProforma(userId, proforma) {}
export async function writeProforma() {}

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

// EXPORT

// import { Injectable } from '@angular/core';
// import { doc, setDoc, getFirestore } from 'firebase/firestore';
// import { AuthService } from '../services/auth.service';
// import { Proforma } from '../interfaces/proforma';

// @Injectable({
//   providedIn: 'root',
// })
// export class ExportUserProformasService {
//   constructor(public authService: AuthService) {
//     this.authService = authService;
//   }

//   async exportProforma(options: Proforma) {
//     let docName =
//       this.authService.userData.uid +
//       options.vesselType +
//       options.operations +
//       options.specialState +
//       options.grossTonnage +
//       options.lengthOverall +
//       options.hoursAtBerth;

//     let db = getFirestore();
//     let hashedDocName = this.createDocName(docName);

//     await setDoc(doc(db, 'proformas', hashedDocName), {
//       vesselType: options.vesselType,
//       operations: options.operations,
//       specialState: options.specialState,
//       grossTonnage: options.grossTonnage,
//       lengthOverall: options.lengthOverall,
//       hoursAtBerth: options.hoursAtBerth,
//       uid: this.authService.userData.uid,
//     });
//   }

//   createDocName(s: string) {
//     var a = 1,
//       c = 0,
//       h,
//       o;
//     if (s) {
//       a = 0;
//       for (h = s.length - 1; h >= 0; h--) {
//         o = s.charCodeAt(h);
//         a = ((a << 6) & 268435455) + o + (o << 14);
//         c = a & 266338304;
//         a = c !== 0 ? a ^ (c >> 21) : a;
//       }
//     }
//     return String(a);
//   }
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

// @Injectable({
//   providedIn: 'root',
// })
// export class ImportUserProformasService {
//   constructor(public authService: AuthService) {
//     this.authService = authService;
//   }

//   async getProformas() {
//     let db = getFirestore();
//     const storedProformas = document.querySelector('#displayStoredProformas');
//     const q = query(
//       collection(db, 'proformas'),
//       where('uid', '==', this.authService.userData.uid)
//     );

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       const q = query(
//         collection(db, 'proformas'),
//         where('uid', '==', this.authService.userData.uid)
//       );
//       renderProformas(doc);
//     });

//     function renderProformas(doc) {
//       //Imports users DB proforma entries within the DOM
//       let ul = document.createElement('ul');
//       let type = document.createElement('li');
//       let tonnage = document.createElement('li');
//       let hours = document.createElement('li');
//       let length = document.createElement('li');
//       let operations = document.createElement('li');
//       let state = document.createElement('li');
//       let deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.classList.add('remove-proforma');

//       ul.style.border = '2px solid white';
//       ul.style.borderRadius = '10px';
//       ul.style.margin = '10px 0';
//       ul.style.minWidth = '100%';
//       ul.style.padding = '15px 15px';
//       ul.style.background = 'black';
//       ul.style.display = 'flex';
//       type.style.marginRight = '20px';
//       tonnage.style.marginRight = '20px';
//       hours.style.marginRight = '20px';
//       length.style.marginRight = '20px';
//       operations.style.marginRight = '20px';
//       state.style.marginRight = '20px';

//       type.textContent = 'Vessel type: ' + doc.data().vesselType + '; ';
//       operations.textContent =
//         'Operations type: ' + doc.data().operations + '; ';
//       state.textContent = 'Special state: ' + doc.data().specialState + '; ';
//       tonnage.textContent = 'Gross Tonnage: ' + doc.data().grossTonnage + '; ';
//       length.textContent =
//         'Length over all: ' + doc.data().lengthOverall + '; ';
//       hours.textContent = 'Hours at berth: ' + doc.data().hoursAtBerth + '; ';

//       ul.appendChild(type);
//       ul.appendChild(operations);
//       ul.appendChild(state);
//       ul.appendChild(tonnage);
//       ul.appendChild(length);
//       ul.appendChild(hours);

//       storedProformas.appendChild(ul);
//       ul.appendChild(deleteButton);

//       deleteButton.onclick = function () {};
//       // let confirmation = window.confirm('Delete Proforma entry ?');
//       // if (confirmation) {
//       // alert('Entry successfully deleted.');
//       // } else {
//       // alert('Entry will not be deleted.');
//       // }
//     }
//   }
// }

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
