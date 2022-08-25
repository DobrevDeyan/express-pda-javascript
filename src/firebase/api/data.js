import * as api from "./api.js"

export const login = api.login
export const register = api.register
export const logout = api.logout

export async function getAllShoes() {
  return api.get("/data/shoes?sortBy=_createdOn%20desc")
}
export async function getShoeById(id) {
  return api.get("/data/shoes/" + id)
}
export async function deleteShoe(id) {
  return api.del("/data/shoes/" + id)
}
export async function addShoe(shoe) {
  return api.post("/data/shoes", shoe)
}
export async function editShoe(id, shoe) {
  return api.put("/data/shoes/" + id, shoe)
}
export async function getShoeByBrand(brand) {
  return api.get(`/data/shoes?where=brand%20LIKE%20%22${brand}%22`)
}
