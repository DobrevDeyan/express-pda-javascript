import { html } from "../utilities/lib.js"
import { validEmailCheck } from "../utilities/email-validation.js"
import { setUserData } from "../utilities/util.js"
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebase-setup.js"

const registerTemplate = (onSubmit) => html` <section id="register">
  <div class="register-container">
    <h1 class="register-title">Register</h1>
    <form @submit="${onSubmit}"  id="signup-form" class="form">
      <div class="input-group">
        <label for="email"
          >Email:<span class="message">Valid email address</span></label
        >
        <input
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div class="input-group">
        <label for="password"
          >Password:<span class="message">Incorrect password</span></label
        >
        <input type="password" name="password" id="password" />
      </div>
      <div class="input-group">
        <label for="password"
          >Repeat Password:<span class="message">Incorrect password</span></label
        >
        <input type="password" name="repass" id="password" />
      </div>
      <button type="submit" class="register-button">Register</button>
      <p class="message">Already have an account? <a href="/login">Login</a></p>
    </form>
    </div>
  </div>
</section>`

export function registerPage(ctx) {
  // RENDER PAGE AND PASS REGISTER FUNCTION
  ctx.render(registerTemplate(onSubmit))
  // EMAIL VALIDATION INPUT
  validEmailCheck()

  // HANDLER FOR REGISTER CONTAINER LINK
  const marker = document.querySelector("nav .guest .marker")
  function indicator(e) {
    marker.style.left = "125.5px"
    marker.style.width = "62.5px"
  }
  const link = document.querySelector("p.message a")
  link.addEventListener("click", (e) => {
    if (!e.target.href.includes("login")) return
    indicator(e)
  })

  // USER LOGIN FUNCTION
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get("email").trim()
    const password = formData.get("password").trim()
    const repass = formData.get("repass").trim()
    if (email === "" || password === "" || repass === "") {
      return alert("All fields are required")
    }
    if (password !== repass) {
      return alert("Passwords do not match")
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const userData = {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        token: userCredentials.user.accessToken,
      }

      // SET TO SESSION STORAGE
      setUserData(userData)
      ctx.updateUserNav()
      ctx.page.redirect("/dashboard")
    } catch (error) {
      alert(error.message)
    }
  }
}
