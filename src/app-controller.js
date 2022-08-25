import { validEmailCheck } from "./utilities/email-validation.js"
import { serverData } from "./firebase/firebase-setup.js"
import { page, render } from "./utilities/lib.js"

// EMAIL VALIDATION
const input = document.getElementById("email")
input.addEventListener("change", validEmailCheck(input))

// FIREBASE SETUP FOR RETRIEVING USER'S DATA
serverData.forEach((userData) => {
  console.log(Object.keys(userData))
  console.log(Object.values(userData))
  //   userData.forEach((data) => {
  //     console.log(data)
  //   })
})
