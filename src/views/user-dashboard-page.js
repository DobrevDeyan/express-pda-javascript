import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"
import {
  readProformasByUserId,
  deleteProforma,
} from "../firebase/firebase-operations.js"

const dashboardTemplate = (proformas) => html`
  <section id="dashboard">
    <div class="dashboard-container">
      <h1 class="dashboard-title">Proformas</h1>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>
        Below you can find a list of all the proformas that are currently stored
        in your profile history sorted by date in descending order. Press the
        button below to see more details.
      </p>
    </div>

    <ul class="list">
      ${proformas.length == 0
        ? html`<h2>No PDA entries in database.</h2>`
        : html`${proformas.map(proformaTemplate)}`}
    </ul>
  </section>
`
const proformaTemplate = (proforma) => html`
  <li class="list-container fade-in">
    <div class="list-item show">
      <div class="list-item-col">
        <p>Tonnage dues: ${proforma.tonnageDues}</p>
        <p>Berth dues: ${proforma.berthDues}</p>
        <p>Pilotage in: ${proforma.pilotageInDues}</p>
        <p>Pilotage out: ${proforma.pilotageOutDues}</p>
        <p>Towage in: ${proforma.towageInDues}</p>
        <p>Towage out: ${proforma.towageOutDues}</p>
      </div>
      <div class="list-item-col">
        <p>Mooring dues: ${proforma.mooringDues}</p>
        <p>Unmooring dues: ${proforma.unmooringDues}</p>
        <p>Channel dues: ${proforma.channelDues}</p>
        <p>Light dues: ${proforma.lightDues}</p>
        <p>Cargo plan dues: ${proforma.cargoPlanDues}</p>
        <p>Oil booming dues: ${proforma.oilBoomingDues}</p>
      </div>
      <div class="list-item-col">
        <p>Sailing permission dues: ${proforma.sailingPermissionDues}</p>
        <p>Total dues: ${proforma.total}</p>
        <p>Company: ${proforma.company}</p>
        <p>Created at: ${proforma.created.toDate().toUTCString()}</p>
        <p>Ship type: ${proforma.type}</p>
        <p>Operations: ${proforma.operation}</p>
      </div>
      <div class="list-item-col">
        <p>Special state: ${proforma.condition}</p>
        <p>Gross tonnage: ${proforma.grt}</p>
        <p>LOA: ${proforma.loa}</p>
        <p>Hours at berth: ${proforma.hours}</p>
        <p>Terminal: ${proforma.terminal}</p>
        <p>Ship name: ${proforma.vessel}</p>
        <p id="hidden">PDA ID: ${proforma.proformaId}</p>
      </div>
    </div>
  </li>
`

export async function dashboardPage(ctx) {
  async function generateUserProformas() {
    const PDAs = []
    const userData = getUserData()
    const userProformas = await readProformasByUserId(userData.id)
    userProformas.forEach((proforma) => {
      const data = proforma.data()
      PDAs.push(data)
    })
    return PDAs
  }

  const proformas = await generateUserProformas()
  ctx.render(dashboardTemplate(proformas))

  document.querySelector(".lds-ellipsis").style.display = "flex"
  setTimeout(() => {
    document.querySelector(".lds-ellipsis").style.display = "none"
    document.querySelector(".dashboard-title").style.paddingBottom = "40px"
  }, 1500)

  ///

  const selectors = document.querySelectorAll(".list-container")
  selectors.forEach((el) => {
    el.addEventListener("click", clicks)
  })

  let clickCount = 0
  const timeout = 400
  // HANDLE CLICK EVENT FOR REMOVING A SINGLE LISTING FROM VIEW OR FROM DATABASE
  function clicks(e) {
    clickCount++
    if (clickCount == 1) {
      setTimeout(function () {
        if (clickCount == 1) {
          removeListItemFromDoM(e)
        } else {
          removeProformaItemFromDatabase(e)
        }
        clickCount = 0
      }, timeout || 300)
    }
  }
  function removeListItemFromDoM(e) {
    let container = e.target
    while (!container.classList.contains("list-container")) {
      container = container.parentElement
    }
    container.classList.remove("show")
    const listItem = container.querySelector(".list-item")
    listItem.classList.remove("show")
    container.ontransitionend = function () {
      container.remove()
    }
  }
  function removeProformaItemFromDatabase(e) {
    let container = e.target
    while (!container.classList.contains("list-container")) {
      container = container.parentElement
    }
    container.classList.remove("show")
    const listItem = container.querySelector(".list-item")
    listItem.classList.remove("show")
    const pdaRef = listItem
      .querySelectorAll(".list-item-col")[3]
      .querySelector("p#hidden")
      .innerText.slice(8)
    container.ontransitionend = function () {
      container.remove()
      deleteProforma(pdaRef)
      generateUserProformas()
    }
  }
}
