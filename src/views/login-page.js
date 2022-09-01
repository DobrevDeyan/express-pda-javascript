import { html } from "../utilities/lib.js"
import { validEmailCheck } from "../utilities/email-validation.js"
// import { setUserData } from "../utilities/util.js"
import {
  app,
  db,
  serverData,
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../firebase/firebase-setup.js"

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

// EMAIL VALIDATION

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit))
  validEmailCheck()

  const marker = document.querySelector(".marker")
  function indicator(e) {
    marker.style.left = "272px"
    marker.style.width = "113.3px"
  }
  const link = document.querySelector("p.message a")
  link.addEventListener("click", (e) => {
    if (!e.target.href.includes("register")) return
    indicator(e)
  })

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get("email").trim()
    const password = formData.get("password").trim()

    if (email === "" || password === "") {
      return alert("All fields are required")
    }

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
    // console.log(userCredentials.user.uid)
    // console.log(userCredentials.user.accessToken)
    // console.log(userCredentials.user)
    // console.log(userData)
    sessionStorage.setItem("userData", JSON.stringify(userData))
    ctx.updateUserNav()
    ctx.page.redirect("/dashboard")
  }
}

// export async function login(email, password) {
//   const result = await post("/users/login", { email, password })
//   const userData = {
//     email: result.email,
//     id: result._id,
//     token: result.accessToken,
//   }
//   setUserData(userData)
//   return result
// }
