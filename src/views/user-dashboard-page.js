import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"
import {
  readProformasByUserId,
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
    </div>
    <div class="proformas-container">
      <div id="display-stored-proformas"></div>
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
    //Imports user proformas and renders them to the DOM
    const storedProformas = document.querySelector("#display-stored-proformas")
    // ELEMENTS
    let ul = document.createElement("ul")
    let type = document.createElement("li")
    let tonnage = document.createElement("li")
    let hours = document.createElement("li")
    let length = document.createElement("li")
    let operations = document.createElement("li")
    let state = document.createElement("li")
    let facility = document.createElement("li")
    let total = document.createElement("li")
    // let total = document.createElement("li") 

    // DIV WRAPPERS
    let col1 = document.createElement("div")
    col1.classList.add("col-1")
    let col2 = document.createElement("div")
    col2.classList.add("col-2")
    let item = document.createElement("div")
    item.classList.add("accordion-item")
    let details = document.createElement("div")
    details.classList.add("details")

    // BUTTONS CONTROL
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.classList.add(`${proforma.data().proformaId}`)
    // let expandButton = document.createElement("button")
    // expandButton.textContent = "Expand"
    // expandButton.classList.add("expand")
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains(`${proforma.data().proformaId}`)) {
        deleteProforma(proforma.data().proformaId)
        event.target.parentNode.remove()
      }
    })

    // POPULATE DATA
    facility.textContent = "Facility: " + proforma.data().terminal
    type.textContent = "Vessel type: " + proforma.data().type
    operations.textContent = "Operations type: " + proforma.data().operation
    state.textContent = "Special state: " + proforma.data().condition
    tonnage.textContent = "Gross Tonnage: " + proforma.data().grt
    length.textContent = "Length over all: " + proforma.data().loa
    hours.textContent = "Hours at berth: " + proforma.data().hours
    total.textContent = "Total in Euro: " + proforma.data().totalDues

    // APPEND ELEMENTS TO DOM
    col1.appendChild(facility)
    col1.appendChild(type)
    col1.appendChild(operations)
    col1.appendChild(state)
    col1.appendChild(deleteButton)
    col2.appendChild(tonnage)
    col2.appendChild(length)
    col2.appendChild(hours)
    col2.appendChild(total)
    col2.appendChild(expandButton)
    details.appendChild(ul)
    item.appendChild(col1)
    item.appendChild(col2)
    storedProformas.appendChild(item)
  }
}
