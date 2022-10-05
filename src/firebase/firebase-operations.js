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
  orderBy,
  limit,
} from "./firebase-setup.js"
import { getUserData } from "../utilities/util.js"

export async function createProforma(pdaData, generatedVarnaEastProforma) {
  const user = JSON.parse(sessionStorage.userData)

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
  const q = query(
    collection(db, "proformas"),
    where("id", "==", userId),
    orderBy("created", "desc"),
    limit(2)
  )
  return await getDocs(q)
  // const q = query(collection(db, "proformas"), where("id", "==", userId))
  // return await getDocs(q)
}
export async function deleteProforma(proformaId, e) {
  let confirmation = window.confirm(
    "Are you sure you want to delete the document ?"
  )
  if (confirmation === true) {
    try {
      await deleteDoc(doc(db, "proformas", proformaId))
    } catch (error) {
      console.log(error)
    }
  } else if (confirmation === false) {
    console.log(confirmation)
    let container = e.target
    while (!container.classList.contains("list-container")) {
      container = container.parentElement
    }
    // container.classList.add("show")
    const listItem = container.querySelector(".list-item")
    listItem.classList.add("show")
  }
}
export async function totalUserProformas() {
  const user = getUserData()
  const firebaseId = user.id

  let totalProformaCount = 0
  const q = query(collection(db, "proformas"), where("id", "==", firebaseId))
  const data = await getDocs(q)
  data.forEach((doc) => {
    totalProformaCount += 1
  })
  return totalProformaCount
}
export async function vesselsAbove20kTons() {
  const user = getUserData()
  const firebaseId = user.id

  let totalVesselCount = 0
  const q = query(
    collection(db, "proformas"),
    where("id", "==", firebaseId),
    where("grt", ">", 20000)
  )
  const data = await getDocs(q)
  data.forEach((doc) => {
    totalVesselCount += 1
  })
  return totalVesselCount
}
export async function queriedTerminals() {
  const user = getUserData()
  const firebaseId = user.id

  let queriedTerminals = []
  const q = query(
    collection(db, "proformas"),
    where("id", "==", firebaseId),
    limit(2)
  )
  const data = await getDocs(q)
  data.forEach((doc) => {
    queriedTerminals.push(doc.data().terminal)
  })
  return queriedTerminals
}
export async function lastRequestedProforma() {
  const user = getUserData()
  const firebaseId = user.id

  const q = query(
    collection(db, "proformas"),
    where("id", "==", firebaseId),
    orderBy("created", "desc"),
    limit(1)
  )

  let lastCreatedInquiry = ""
  const search = await getDocs(q)
  search.forEach((doc) => {
    lastCreatedInquiry = doc.data().created.toDate().toUTCString()

    // console.log(doc.data().created.toDate().toUTCString())
  })
  lastCreatedInquiry = lastCreatedInquiry.slice(5)
  return lastCreatedInquiry
}
export async function lastRequestedVessels() {
  const user = getUserData()
  const firebaseId = user.id

  let queriedVessels = []
  const q = query(
    collection(db, "proformas"),
    where("id", "==", firebaseId),
    limit(2)
  )
  const data = await getDocs(q)
  data.forEach((doc) => {
    queriedVessels.push(doc.data().vessel)
  })
  return queriedVessels
}
// export async function checkIfUserHasAnyProformas() {
//   const userData = getUserData()
//   const userProformas = await readProformasByUserId(userData.id)
//   if (userProformas.empty) {
//     const parent = document.querySelector(".proformas-container")
//     parent.replaceChildren()
//     const subParent = document.createElement("div")
//     subParent.classList.add(".display-stored-proformas")
//     const p = document.createElement("p")
//     p.textContent = "No PDAs stored"
//     subParent.appendChild(p)
//     parent.appendChild(subParent)
//   }
// }
