import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"
import {
  readProformasByUserId,
  deleteProforma,
} from "../firebase/firebase-operations.js"

const dashboardTemplate = (proformas) => html`
  <section id="dashboard">
    <div class="dashboard-container">
      <div class="dashboard-heading-container">
        <h2 class="dashboard-title">Dashboard</h2>
        <div class="lds-ellipsis fade-out">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul>
        <li>
          Below you can find a list of all the PDA's that are currently stored
          in your company profile.
        </li>
        <li>
          If you desire to remove a listing from view, just tap once within it's
          container.
        </li>
        <li>
          If you decide to return in view any discarded listings reload the
          page.
        </li>
        <li>
          If you wish to delete a listing from database, double tap and confirm.
        </li>
      </ul>
    </div>
    <ul class="list">
      ${proformas.length == 0
        ? html`<h2 class="fade-in">
            <span id="typed"></span>
            No PDAs available.
          </h2>`
        : html`${proformas.map(proformaTemplate)}`}
    </ul>
  </section>
`
const proformaTemplate = (proforma) => html`
  <li class="list-container fade-in">
    <div class="list-item show">
      <div class="list-item-col">
        <div class="pda-summary">
          <h3>${proforma.vessel}</h3>
          <img src="../../images/calc.svg" alt="calculator" id="calculator" />
        </div>
        <div class="pda-col-container">
          <div class="pda-col">
            <p id="hidden">
              PDA ID:
              <span class="separation">${proforma.proformaId}</span>
            </p>
            <p>
              Created:
              <span class="separation"
                >${proforma.created.toDate().toUTCString().slice(6)}</span
              >
            </p>
            <p>Ship name: <span class="separation">${proforma.vessel}</span></p>
            <p>Ship type: <span class="separation">${proforma.type}</span></p>
            <p>
              Terminal: <span class="separation">${proforma.terminal}</span>
            </p>
          </div>
          <div class="pda-col">
            <p>
              Operations: <span class="separation">${proforma.operation}</span>
            </p>
            <p>
              Special state:
              <span class="separation">${proforma.condition}</span>
            </p>
            <p>
              Gross tonnage: <span class="separation">${proforma.grt}</span>
            </p>
            <p>LOA:<span class="separation">${proforma.loa}</span></p>
            <p>
              Hours at berth: <span class="separation">${proforma.hours}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="list-item-col">
        <div class="pda-summary">
          <h3>PROFORMA DISBURSEMENT ACCOUNT</h3>
        </div>
        <div class="pda-col-container">
          <div class="pda-col font-shrink">
            <p>
              Mooring dues:
              <span class="separation">${proforma.mooringDues} EUR</span>
            </p>
            <p>
              Unmooring dues:
              <span class="separation">${proforma.unmooringDues} EUR</span>
            </p>
            <p>
              Channel dues:
              <span class="separation">${proforma.channelDues} EUR</span>
            </p>
            <p>
              Light dues:
              <span class="separation">${proforma.lightDues} EUR</span>
            </p>
            <p>
              Cargo plan dues:
              <span class="separation">${proforma.cargoPlanDues} EUR</span>
            </p>
            <p>
              Oil booming dues:
              <span class="separation">${proforma.oilBoomingDues} EUR</span>
            </p>
            <p>
              Tonnage dues:
              <span class="separation">${proforma.tonnageDues} EUR</span>
            </p>
          </div>
          <div class="pda-col">
            <p>
              Berth dues:
              <span class="separation">${proforma.berthDues} EUR</span>
            </p>
            <p>
              Pilotage in:
              <span class="separation">${proforma.pilotageInDues} EUR</span>
            </p>
            <p>
              Pilotage out:
              <span class="separation">${proforma.pilotageOutDues} EUR</span>
            </p>
            <p>
              Towage in:
              <span class="separation">${proforma.towageInDues} EUR</span>
            </p>
            <p>
              Towage out:
              <span class="separation">${proforma.towageOutDues} EUR</span>
            </p>
            <p>
              Sailing permission:
              <span class="separation"
                >${proforma.sailingPermissionDues} EUR</span
              >
            </p>
            <p>
              Total dues:
              <span class="separation">${proforma.totalDues} EUR</span>
            </p>
          </div>
        </div>
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
    // document.querySelector(".dashboard-title").style.paddingBottom = "40px"
  }, 1200)

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
    const pdaRef = document.querySelector("#hidden").innerText
    container.ontransitionend = function () {
      // container.remove()
      deleteProforma(pdaRef, e)
      generateUserProformas()
    }
  }
  window.onload = function () {
    var typed = new Typed("#typed", {
      strings: [
        // "",
        "No PDAs in database.",
        "Please visit the PDA page and submit your vessel details.",
      ],
      typeSpeed: 70,
      BackSpeed: 60,
      loop: true,
      showCursor: false,
      // cursorChar: "|",
    })
  }
}
