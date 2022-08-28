import { html } from "../utilities/lib.js"

const homeTemplate = () => html` <section id="home">
  <!-- <img src="../../images/Container ship.gif" alt="shipping gif" /> -->
  <h1>Express <span>PDA</span></h1>
  <h2>PDAs made easy</h2>
  <h2>Voyage estimations for your future fixtures</h2>
</section>`
export function homePage(ctx) {
  ctx.render(homeTemplate())
}
