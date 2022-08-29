import { html } from "../utilities/lib.js"

const faqTemplate = () => html` <section id="faq">
  <img src="../../images/Container ship.gif" alt="shipping gif" />
</section>`
export function faqPage(ctx) {
  ctx.render(faqTemplate())
}
