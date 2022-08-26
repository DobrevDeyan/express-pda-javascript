import { html } from "../utilities/lib.js"
// import { login } from "../api/data.js"

const loginTemplate = () => html` <section id="login">
  <div class="login-container">
    <h1 class="login-title">Welcome</h1>
    <form class="form">
      <div class="input-group">
        <label for="email"
          >Email:<span class="message">Valid email address</span></label
        >
        <input type="email" name="email" id="email" />
      </div>
      <div class="input-group">
        <label for="password"
          >Password:<span class="message">Incorrect password</span></label
        >
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</section>`

export function loginPage(ctx) {
  ctx.render(loginTemplate())

  // async function onSubmit(event) {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)

  //   const email = formData.get("email").trim()
  //   const password = formData.get("password").trim()

  //   if (email === "" || password === "") {
  //     return alert("All fields are required")
  //   }

  //   await login(email, password)
  //   ctx.updateUserNav()
  //   ctx.page.redirect("/home")
  // }
}
