import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"

function navigationSlider(target) {
  const items = document.querySelectorAll("header nav a")

  // console.log(items)
  // const additionalLinks = document.querySelectorAll(".nav-link")
  // document.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("nav-link")) {
  //     console.log(event.target)
  //   }
  // })
  // console.log(additionalLinks)

  function indicator(e) {
    target.style.left = e.offsetLeft + "px"
    target.style.width = e.offsetWidth + "px"
  }
  items.forEach((link) => {
    link.addEventListener("click", (e) => {
      indicator(e.target)
    })
  })
}

export { html, render, page, navigationSlider }
