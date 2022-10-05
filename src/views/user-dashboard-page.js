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
      <div class="lds-ellipsis fade-out">
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
        ? html`<h2 class="fade-in"><span class="typing-animation"></span></h2>`
        : html`${proformas.map(proformaTemplate)}`}
    </ul>
  </section>
`
const proformaTemplate = (proforma) => html`
  <li class="list-container fade-in">
    <div class="list-item show">
      <div class="list-item-col">
        <div class="pda-summary">
          
        </div>
        <p>
          Created:
          <span class="separation"
            >${proforma.created.toDate().toUTCString().slice(6)}</span
          >
        </p>
        <p>Ship name: <span class="separation">${proforma.vessel}</span></p>
        <p>Ship type: <span class="separation">${proforma.type}</span></p>
        <p>Terminal: <span class="separation">${proforma.terminal}</span></p>
        <p>Operations: <span class="separation">${proforma.operation}</span></p>
        <p>
          Special state: <span class="separation">${proforma.condition}</span>
        </p>
        <p>Gross tonnage: <span class="separation">${proforma.grt}</span></p>
        <p>LOA:<span class="separation">${proforma.loa}</span></p>
        <p>Hours at berth: <span class="separation">${proforma.hours}</span></p>
        <p id="hidden">
          PDA ID: <span class="separation">${proforma.proformaId}</span>
        </p>
      </div>
      <div class="list-item-col">
        <p>
          Mooring dues: <span class="separation"></span>${proforma.mooringDues}
          EUR
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
          Light dues: <span class="separation">${proforma.lightDues} EUR</span>
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
        <p>
          Berth dues: <span class="separation">${proforma.berthDues} EUR</span>
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
          Sailing permission dues:
          <span class="separation">${proforma.sailingPermissionDues} EUR</span>
        </p>
        <p>
          Total dues: <span class="separation">${proforma.totalDues} EUR</span>
        </p>
      </div>
      <!-- <div class="list-item-col"></div>
      <div class="list-item-col"></div> -->
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
    const pdaRef = listItem.querySelector("#hidden").innerText.slice(8)
    // .querySelectorAll(".list-item-col")[3]
    // .querySelector("p#hidden")
    // .innerText.slice(8)
    container.ontransitionend = function () {
      container.remove()
      deleteProforma(pdaRef)
      generateUserProformas()
    }
  }
  window.onload = function () {
    let typed = new Typed(".typing-animation", {
      strings: [
        "",
        "No PDAs in database.",
        "Please visit the PDA page and submit your vessel details.",
      ],
      typeSpeed: 70,
      BackSpeed: 60,
      loop: false,
      showCursor: false,
      // cursorChar: "|",
    })
  }
}
