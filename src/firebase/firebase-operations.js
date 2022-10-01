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
    orderBy("created", "desc")
    // limit(1)
  )
  return await getDocs(q)
  // const q = query(collection(db, "proformas"), where("id", "==", userId))
  // return await getDocs(q)
}
export async function deleteProforma(proformaId) {
  let confirmation = window.confirm(
    "Are you sure you want to delete the document ?"
  )
  if (confirmation) {
    try {
      await deleteDoc(doc(db, "proformas", proformaId))
      // alert("Entry successfully deleted.")
    } catch (error) {
      // alert("Error deleting document")
    }
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
