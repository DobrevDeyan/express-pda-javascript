import { validEmailCheck } from "./email-validation.js"
// import { getAllUsers } from "./firebase-setup.js"

// EMAIL VALIDATION
const input = document.getElementById("email")
input.addEventListener("change", validEmailCheck(input))
