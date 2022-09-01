import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"

const dashboardTemplate = () => html`
  <section id="dashboard">
    <h2>Proformas</h2>
    <h1 style="position: center">Welcome to your Proformas, <span></span>!</h1>
  </section>
`
// const proformaTemplate = (shoe) => html`
//   <li class="card">
//     <img src="${shoe.imageUrl}" alt="eminem" />
//     <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
//     <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
//     <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
//     <a class="details-btn" href="/details/${shoe._id}">Details</a>
//   </li>
// `
export async function dashboardPage(ctx) {
  ctx.render(dashboardTemplate())

  const userData = getUserData()
  document.querySelector("#dashboard h1 span").textContent = userData.email
}

//  ${shoes.length == 0
//   ? html`<h2>There are no items added yet.</h2> `
//   : html` <ul class="card-wrapper">
//       ${shoes.map(shoeTemplate)}
//     </ul>`}
