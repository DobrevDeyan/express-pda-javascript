import { html } from "../utilities/lib.js"

const homeTemplate = () => html` <section id="home">
  <!-- <img src="../../images/Container ship.gif" alt="shipping gif" /> -->
  <h1>Express PDA</h1>
  <h2>PDAs made easy</h2>
  <h2>
    Reliable tool to get instant access to financial information for your
    terminal of fixture.
  </h2>
</section>`
export function homePage(ctx) {
  ctx.render(homeTemplate())
}
