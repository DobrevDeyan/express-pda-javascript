import { html } from "../utilities/lib.js"

const homeTemplate = () => html` <section id="home">
  <img src="../../images/Container ship.gif" alt="" />
  <h1>Welcome to Express PDA</h1>
  <h2>
    Use a powerful web tool to get instant access to the financial information
    for your port of choosing and plan your vessel fixture
  </h2>
</section>`
export function homePage(ctx) {
  ctx.render(homeTemplate())
}
