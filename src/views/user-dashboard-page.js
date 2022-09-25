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
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
    document.querySelector(".lds-roller").style.display = "inline-block"
    setTimeout(() => {
      document.querySelector(".lds-roller").style.display = "none"
      document.querySelector(".proformas-container").style.opacity = "1"
      document
        .querySelector(".proformas-container")
        .classList.add("active-proformas")
    }, 1500)

    // document.querySelector(".proformas-container").style.opacity = "1"
    // document.querySelector(".proformas-container").classList.add("active")

    // document.querySelector(".table-wrapper").style.opacity = "0"
    // setTimeout(() => {
    // document.querySelector(".proformas-container").remove()
    // }, 1000)
  }

  function renderProformas(proforma) {
    //Imports user proformas and renders them to the DOM
    const storedProformas = document.querySelector("#display-stored-proformas")
    // VESSEL AND OPERATION DETAILS DOM ELEMENTS
    let company = document.createElement("li")
    let terminal = document.createElement("li")
    let type = document.createElement("li")
    let operations = document.createElement("li")
    let condition = document.createElement("li")
    let tonnage = document.createElement("li")
    let hours = document.createElement("li")
    let length = document.createElement("li")
    let created = document.createElement("li")
    let vesselName = document.createElement("li")
    let total = document.createElement("li")
    // VESSEL FINANCIAL DETAILS DOM ELEMENTS
    let tonnageDues = document.createElement("li")
    let berthDues = document.createElement("li")
    let pilotageInDues = document.createElement("li")
    let pilotageOutDues = document.createElement("li")
    let towageInDues = document.createElement("li")
    let towageOutDues = document.createElement("li")
    let mooringDues = document.createElement("li")
    let unmooringDues = document.createElement("li")
    let channelDues = document.createElement("li")
    let lightDues = document.createElement("li")
    let cargoPlanDues = document.createElement("li")
    let oilBoomingDues = document.createElement("li")
    let sailingPermissionDues = document.createElement("li")
    let marpolDues = document.createElement("li")

    // POPULATE DATA
    tonnageDues.textContent = "Tonnage dues: " + proforma.data().tonnageDues
    berthDues.textContent = "Berth dues: " + proforma.data().berthDues
    pilotageInDues.textContent =
      "Pilotage in: " + proforma.data().pilotageInDues
    pilotageOutDues.textContent =
      "Pilotage out: " + proforma.data().pilotageOutDues
    towageInDues.textContent = "Towage in: " + proforma.data().towageInDues
    towageOutDues.textContent = "Towage out: " + proforma.data().towageOutDues
    mooringDues.textContent = "Mooring: " + proforma.data().mooringDues
    unmooringDues.textContent = "Unmooring: " + proforma.data().unmooringDues
    channelDues.textContent = "Channel dues: " + proforma.data().unmooringDues
    lightDues.textContent = "Light dues: " + proforma.data().lightDues
    cargoPlanDues.textContent =
      "Cargo plan dues: " + proforma.data().cargoPlanDues
    oilBoomingDues.textContent =
      "Oil Booming dues: " + proforma.data().oilBoomingDues
    sailingPermissionDues.textContent =
      "Sailing permission: " + proforma.data().sailingPermissionDues
    marpolDues.textContent = "Marpol dues: " + proforma.data().marpolDues
    total.textContent = "Total in Euro: " + proforma.data().totalDues
    company.textContent = "Company name: " + proforma.data().company
    created.textContent = proforma.data().created.toDate().toUTCString()
    type.textContent = "Vessel type: " + proforma.data().type
    operations.textContent = "Operations type: " + proforma.data().operation
    condition.textContent = "Special state: " + proforma.data().condition
    tonnage.textContent = "Gross Tonnage: " + proforma.data().grt
    length.textContent = "Length over all: " + proforma.data().loa
    hours.textContent = "Hours at berth: " + proforma.data().hours
    terminal.textContent = "Facility: " + proforma.data().terminal
    condition.textContent = "Condition: " + proforma.data().condition
    vesselName.textContent = "Vessel: " + proforma.data().vessel
    // BUTTON CONTROL
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.classList.add(`${proforma.data().proformaId}`)
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains(`${proforma.data().proformaId}`)) {
        deleteProforma(proforma.data().proformaId)
        console.log(event.target)
        event.target.parentNode.parentNode.remove()
      }
    })
    // DIV WRAPPERS
    let col1 = document.createElement("div")
    col1.classList.add("col-1")
    let col2 = document.createElement("div")
    col2.classList.add("col-2")
    let col3 = document.createElement("div")
    col3.classList.add("col-3")
    let col4 = document.createElement("div")
    col4.classList.add("col-4")

    let proformaItem = document.createElement("div")
    proformaItem.classList.add("accordion-item")

    // APPEND ELEMENTS TO DOM
    col1.appendChild(created)
    col1.appendChild(company)
    col1.appendChild(vesselName)
    col1.appendChild(terminal)
    col1.appendChild(operations)
    col1.appendChild(condition)

    col2.appendChild(type)
    col2.appendChild(tonnage)
    col2.appendChild(length)
    col2.appendChild(hours)
    col2.appendChild(total)
    col2.appendChild(deleteButton)

    col3.appendChild(tonnageDues)
    col3.appendChild(berthDues)
    col3.appendChild(pilotageInDues)
    col3.appendChild(pilotageOutDues)
    col3.appendChild(towageInDues)
    col3.appendChild(towageOutDues)

    col4.appendChild(mooringDues)
    col4.appendChild(unmooringDues)
    col4.appendChild(channelDues)
    col4.appendChild(lightDues)
    col4.appendChild(cargoPlanDues)
    col4.appendChild(oilBoomingDues)
    col4.appendChild(sailingPermissionDues)
    col4.appendChild(marpolDues)

    proformaItem.appendChild(col1)
    proformaItem.appendChild(col2)
    proformaItem.appendChild(col3)
    proformaItem.appendChild(col4)
    storedProformas.appendChild(proformaItem)
  }
}
