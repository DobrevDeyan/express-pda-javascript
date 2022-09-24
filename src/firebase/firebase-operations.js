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
export async function updateProforma(userId, proforma) {}
