import { html } from "../utilities/lib.js"
import { validEmailCheck } from "../utilities/email-validation.js"
// import { register } from "../api/data.js"

const registerTemplate = (onInputChange) => html` <section id="register">
  <div class="register-container">
    <h1 class="register-title">Register</h1>
    <form class="form">
      <div class="input-group">
        <label for="email"
          >Email:<span class="message">Valid email address</span></label
        >
        <input
          @change="${onInputChange}"
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
          >Password:<span class="message">Incorrect password</span></label
        >
        <input type="password" name="repass" id="repass" />
      </div>
      <button type="submit" class="register-button">Login</button>
      <p class="message">Already have an account? <a href="/login">Login</a></p>
    </form>
    </div>
  </div>
</section>`

export function registerPage(ctx) {
  ctx.render(registerTemplate(onInputChange))

  function onInputChange(event) {
    console.log(1)
  }

  // async function onSubmit(event) {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)

  //   const email = formData.get("email").trim()
  //   const password = formData.get("password").trim()
  //   const repass = formData.get("re-password").trim()

  //   if (email === "" || password === "" || repass === "") {
  //     return alert("All fields are required")
  //   }
  //   if (password !== repass) {
  //     return alert("Passwords do not match")
  //   }

  //   await register(email, password)
  //   ctx.updateUserNav()
  //   ctx.page.redirect("/dashboard")
  // }
}
