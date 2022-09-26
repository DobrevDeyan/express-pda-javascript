import { page, render, navigationSlider } from "./utilities/lib.js"
import { onAuthStateChanged, auth } from "./firebase/firebase-setup.js"
import { setUserData, getUserData, clearUserData } from "./utilities/util.js"
import { homePage } from "./views/home-page.js"
import { faqPage } from "./views/faq-page.js"
import { loginPage } from "./views/login-page.js"
import { registerPage } from "./views/register-page.js"
import { dashboardPage } from "./views/user-dashboard-page.js"
import { createPdaPage } from "./views/create-pda-page.js"
import { profilePage } from "./views/profile-page.js"
// import { logout } from "./api/api.js"
// import { detailsPage } from "./views/details.js"
// import { editPage } from "./views/edit.js"
// import { searchPage } from "./views/search.js"

const root = document.getElementById("site-content")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
// page("/", homePage)
page("/", createPdaPage)
page("/faq", faqPage)
page("/login", loginPage)
page("/register", registerPage)
page("/dashboard", dashboardPage)
page("/create-pda", createPdaPage)
page("/profile", profilePage)
// page("/details/:id", detailsPage)
// page("/edit/:id", editPage)

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
    // document.querySelector(".user span").textContent = userData.email
    // document.querySelector(".user span").style.color = "alice"
    const target = document.querySelector("nav .user .marker")
    navigationSlider(target)
  } else {
    document.querySelector(".user").style.display = "none"
    document.querySelector(".guest").style.display = "inline-block"
    const target = document.querySelector("nav .guest .marker")
    navigationSlider(target)
  }
}
