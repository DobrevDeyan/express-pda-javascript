import { validEmailCheck } from "./utilities/email-validation.js"
import {} from "./firebase/firebase-operations.js"
import { page, render } from "./utilities/lib.js"

// EMAIL VALIDATION
const input = document.getElementById("email")
input.addEventListener("change", validEmailCheck(input))
