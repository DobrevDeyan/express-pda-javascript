import { page, render } from "./utilities/lib.js"
import { onAuthStateChanged, auth } from "./firebase/firebase-setup.js"
import { setUserData, getUserData, clearUserData } from "./utilities/util.js"
import { homePage } from "./views/home-page.js"
import { faqPage } from "./views/faq-page.js"
import { loginPage } from "./views/login-page.js"
import { registerPage } from "./views/register-page.js"
import { dashboardPage } from "./views/user-dashboard-page.js"
import { createPdaPage } from "./views/create-pda-page.js"
import { profilePage } from "./views/profile-page.js"

const root = document.getElementById("site-content")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
page("/", homePage)
page("/faq", faqPage)
page("/login", loginPage)
page("/register", registerPage)
page("/dashboard", dashboardPage)
page("/create-pda", createPdaPage)
page("/profile", profilePage)

// Initiate app
updateUserNav()
page.start()

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root)
  ctx.updateUserNav = updateUserNav
  next()
}

function onLogout() {
  auth.signOut().then(() => {
    sessionStorage.clear()
    updateUserNav()
    page.redirect("/")
  })
}

function updateUserNav() {
  const userData = getUserData()
  if (userData) {
    document.querySelector(".user").style.display = "inline-block"
    document.querySelector(".guest").style.display = "none"
  } else {
    document.querySelector(".user").style.display = "none"
    document.querySelector(".guest").style.display = "inline-block"
  }
}
