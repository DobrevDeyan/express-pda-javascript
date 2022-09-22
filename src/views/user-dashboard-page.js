import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"
import {
  readProformasByUserId,
  updateProforma,
  deleteProforma,
} from "../firebase/firebase-operations.js"

const dashboardTemplate = (generateUserProformas) => html`
  <section id="dashboard">
    <div class="dashboard-container">
      <h1 class="dashboard-title">Proformas</h1>
      <button
        @click="${generateUserProformas}"
        type="button"
        class="generate-btn"
      >
        Generate PDAs
      </button>
      <div id="displayStoredProformas"></div>
    </div>
  </section>
`

export async function dashboardPage(ctx) {
  ctx.render(dashboardTemplate(generateUserProformas))

  async function generateUserProformas() {
    const userData = getUserData()
    const userProformas = await readProformasByUserId(userData.id)

    userProformas.forEach((proforma) => {
      renderProformas(proforma)
    })

    document.querySelector(".generate-btn").disabled = true
  }

  function renderProformas(proforma) {
    const storedProformas = document.querySelector("#displayStoredProformas")
    //Imports user proformas and renders them to the DOM
    let ul = document.createElement("ul")
    let type = document.createElement("li")
    let tonnage = document.createElement("li")
    let hours = document.createElement("li")
    let length = document.createElement("li")
    let operations = document.createElement("li")
    let state = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.classList.add(`${proforma.data().proformaId}`)
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains(`${proforma.data().proformaId}`)) {
        deleteProforma(proforma.data().proformaId)
      }
    })

    ul.style.border = "2px solid white"
    ul.style.borderRadius = "10px"
    ul.style.margin = "10px 0"
    ul.style.minWidth = "100%"
    ul.style.padding = "15px 15px"
    ul.style.display = "flex"
    type.style.marginRight = "20px"
    tonnage.style.marginRight = "20px"
    hours.style.marginRight = "20px"
    length.style.marginRight = "20px"
    operations.style.marginRight = "20px"
    state.style.marginRight = "20px"
    type.textContent = "Vessel type: " + proforma.data().type + "; "
    operations.textContent =
      "Operations type: " + proforma.data().operation + "; "
    state.textContent = "Special state: " + proforma.data().condition + "; "
    tonnage.textContent = "Gross Tonnage: " + proforma.data().grt + "; "
    length.textContent = "Length over all: " + proforma.data().loa + "; "
    hours.textContent = "Hours at berth: " + proforma.data().hours + "; "
    ul.appendChild(type)
    ul.appendChild(operations)
    ul.appendChild(state)
    ul.appendChild(tonnage)
    ul.appendChild(length)
    ul.appendChild(hours)
    ul.appendChild(deleteButton)
    storedProformas.appendChild(ul)
  }
}
