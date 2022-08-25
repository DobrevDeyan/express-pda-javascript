import { page, render } from "./lib.js"
import { homePage } from "./views/home.js"
import { getUserData } from "./util.js"
import { dashboardPage } from "./views/dashboard.js"
import { loginPage } from "./views/login.js"
import { registerPage } from "./views/register.js"
import { logout } from "./api/api.js"
import { createPage } from "./views/add-pair.js"
import { detailsPage } from "./views/details.js"
import { editPage } from "./views/edit.js"
import { searchPage } from "./views/search.js"

const root = document.querySelector("main")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
page("/", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/dashboard", dashboardPage)
page("/details/:id", detailsPage)
page("/add-pair", createPage)
page("/edit/:id", editPage)
page("/search", searchPage)

// // Initiate app
updateUserNav()
page.start()

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root)
  ctx.updateUserNav = updateUserNav
  next()
}

function onLogout() {
  logout()
  updateUserNav()
  page.redirect("/")
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
