import { html } from "../utilities/lib.js"

const homeTemplate = () => html` <section id="home">
  <h1>Express <span>PDA</span></h1>
  <h2>PDAs made easy</h2>
  <h2>
    <span class="typing"></span>
  </h2>
</section>`
export function homePage(ctx) {
  ctx.render(homeTemplate())

  // TYPING ANIMATION
  let typed = new Typed(".typing", {
    strings: [
      "",
      "Voyage estimates for your future fixtures",
      "24 hour access on every device",
      "Port information and services available",
    ],
    typeSpeed: 60,
    BackSpeed: 60,
    loop: true,
    // cursorChar: "|",
  })
}
