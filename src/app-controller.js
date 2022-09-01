import {} from "./firebase/firebase-operations.js"
import { page, render, navigationSlider } from "./utilities/lib.js"
import { onAuthStateChanged, auth } from "./firebase/firebase-setup.js"
import { setUserData, getUserData, clearUserData } from "./utilities/util.js"
import { homePage } from "./views/home-page.js"
import { faqPage } from "./views/faq-page.js"
import { loginPage } from "./views/login-page.js"
import { registerPage } from "./views/register-page.js"
import { dashboardPage } from "./views/user-dashboard-page.js"
// import { createPage } from "./views/add-pair.js"
// import { detailsPage } from "./views/details.js"
// import { editPage } from "./views/edit.js"
// import { searchPage } from "./views/search.js"

const root = document.getElementById("site-content")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
page("/", homePage)
page("/faq", faqPage)
page("/login", loginPage)
page("/register", registerPage)
page("/dashboard", dashboardPage)
// page("/details/:id", detailsPage)
// page("/add-pair", createPage)
// page("/edit/:id", editPage)
// page("/search", searchPage)

// Initiate app
updateUserNav()
page.start()

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root)
  ctx.updateUserNav = updateUserNav
  ctx.loginPage = loginPage
  next()
}
function onLogout() {
  sessionStorage.clear()
  updateUserNav()
  page.redirect("/")
}
function updateUserNav() {
  const userData = getUserData()
  if (userData) {
    document.querySelector(".user").style.display = "inline-block"
    document.querySelector(".guest").style.display = "none"
    document.querySelector(".user span").textContent = userData.email
    document.querySelector(".user span").style.color = "aliceblue"
    const target = document.querySelector("nav .user .marker")
    navigationSlider(target)
  } else {
    document.querySelector(".user").style.display = "none"
    document.querySelector(".guest").style.display = "inline-block"
    const target = document.querySelector("nav .guest .marker")
    navigationSlider(target)
  }
}
