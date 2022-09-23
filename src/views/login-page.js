import { html } from "../utilities/lib.js"
import { validEmailCheck } from "../utilities/email-validation.js"
import { setUserData } from "../utilities/util.js"
import { auth, signInWithEmailAndPassword } from "../firebase/firebase-setup.js"

const loginTemplate = (onSubmit) => html` <section id="login">
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form @submit="${onSubmit}" class="form">
      <div class="input-group">
        <label for="email"
          >Email:<span class="message">Valid email address</span></label
        >
        <input type="email" name="email" id="email" value="skine@abv.bg" />
      </div>
      <div class="input-group">
        <label for="password"
          >Password:<span class="message">Incorrect password</span></label
        >
        <input type="password" name="password" id="password" value="123456" />
      </div>
      <button type="submit" class="login-button">Login</button>
      <p class="message">
        Don't have an account?
        <a href="/register">Register</a>
      </p>
    </form>
  </div>
</section>`

export function loginPage(ctx) {
  // RENDER PAGE AND PASS LOGIN FUNCTION
  ctx.render(loginTemplate(onSubmit))
  // EMAIL VALIDATION INPUT
  validEmailCheck()

  // HANDLER FOR LOGIN CONTAINER LINK
  const marker = document.querySelector("nav .guest .marker")
  function indicator(e) {
    marker.style.left = "164px"
    marker.style.width = "73px"
  }
  const link = document.querySelector("p.message a")
  link.addEventListener("click", (e) => {
    if (!e.target.href.includes("register")) return
    indicator(e)
  })

  // USER LOGIN FUNCTION
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get("email").trim()
    const password = formData.get("password").trim()

    if (email === "" || password === "") {
      return alert("All fields are required")
    }

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const userData = {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        token: userCredentials.user.accessToken,
      }
      setUserData(userData)
      ctx.updateUserNav()
      ctx.page.redirect("/dashboard")
    } catch (error) {
      alert(error.message)
    }
  }
}
