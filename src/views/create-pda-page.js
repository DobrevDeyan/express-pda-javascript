import { html } from "../utilities/lib.js"
import {
  calculateProforma,
  generatedVarnaEastProforma,
} from "../calculator/pda-calculator.js"
import { createProforma } from "../firebase/firebase-operations.js"

const createPdaTemplate = (onSubmit) => html`
  <section id="create-pda">
    <main>
      <div class="pda-container">
        <h1 class="dashboard-title">Generate PDA</h1>
        <div class="form-wrapper">
          <form @submit="${onSubmit}" class="pda-conditions">
            <hr />
            <div class="col-1">
              <fieldset>
                <legend>Terminal</legend>
                <select id="terminal" name="terminal">
                  <option></option>
                  <option value="Varna East" id="tanker">Varna East</option>
                  <option value="Varna West" id="other">Varna West</option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Ship type</legend>
                <select id="vessel-type" name="vessel-type">
                  <option></option>
                  <option value="Bulk carrier" id="bulk-carrier">
                    Bulk carrier
                  </option>
                  <option value="Tanker" id="tanker">Tanker</option>
                  <option value="Container" id="container">Container</option>
                  <option value="Passenger" id="passenger">Passenger</option>
                  <option value="Navy" id="navy">Navy</option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Operation</legend>
                <select id="operations" name="operations">
                  <option></option>
                  <option value="Loading" id="loading">Loading</option>
                  <option value="Discharging" id="discharging">
                    Discharging
                  </option>
                  <option value="Docking-repairs" id="docking-repairs">
                    Docking/Repairs
                  </option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Condition</legend>
                <select id="conditions" name="conditions">
                  <option>None</option>
                  <option value="DG cargo inward" id="dg-cargo-in">
                    DG cargo inward
                  </option>
                  <option value="DG cargo outward" id="dg-cargo-out">
                    DG cargo outward
                  </option>
                  <option value="DG cargo in/out" id="dg-cargo-in-out">
                    DG cargo in/out
                  </option>
                  <option value="Overtime" id="overtime">Overtime</option>
                </select>
              </fieldset>
            </div>
            <hr />
            <div class="col-2">
              <label for="name">Gt/Rgt:</label><br />
              <input type="number" id="gross_tonnage" name="grt" /><br />
              <label for="name">Loa:</label><br />
              <input type="number" id="length_over_all" name="loa" /><br />
              <label for="name">Hours:</label><br />
              <input type="number" id="hours_at_berth" name="hours" /><br />
            </div>
            <button type="submit" class="login-button">Calculate</button>

            <div class="col-3">
              <div class="table-info">
                <p>
                  Dear Customers, <br /><br />
                  kindly be guided that the provided expenses are up to date
                  with currently in force tariffs from local providers.<br /><br />
                  Basis the type of operation, cargo and taking into account
                  local compliances, the provided values can be subject to
                  change. For more information about specific inquiries, do not
                  hesitate to contact us.
                </p>
                <p>
                  Please follow the below input fields and provide exact
                  particulars basis ships valid certificates
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="table-wrapper">
        <!-- Row title -->
        <div class="title">
          <li>Service</li>
          <li id="port-name"></li>
          <li>Price in EUR</li>
        </div>
        <!-- Row Tonnage dues -->
        <article class="row mlb">
          <ul>
            <li>Tonnage dues</li>
            <li id="result-tonnage-dues"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's gross tonnage * 0.55 plus additional multiplication with
              coefficient depending on vessel type.
            </li>
          </ul>
        </article>
        <!-- Row Berth dues -->
        <article class="row mlb">
          <ul>
            <li>Berth dues</li>
            <li id="result-berth-dues"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's loa * hours at berth * 0.1 plus additional multiplication
              with coefficient depending on vessel type.
            </li>
          </ul>
        </article>
        <!-- Row Pilotage in dues -->
        <article class="row mlb">
          <ul>
            <li>Pilotage In</li>
            <li id="result-pilotage-in"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's grt coefficient * 0.9, grt coefficient is assigned as per
              provider's tariff based ot vessel's gross tonnage.
            </li>
          </ul>
        </article>

        <!-- Row Pilotage out dues -->
        <article class="row mlb">
          <ul>
            <li>Pilotage out</li>
            <li id="result-pilotage-out"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's grt coefficient * 0.9, grt coefficient is assigned as per
              provider's tariff based ot vessel's gross tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Towage in dues -->
        <article class="row mlb">
          <ul>
            <li>Towage in</li>
            <li id="result-towage-in"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's grt coefficient * 0.5, grt coefficient is assigned as per
              provider's tariff based ot vessel's gross tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Towage out dues -->
        <article class="row mlb">
          <ul>
            <li>Towage out</li>
            <li id="result-towage-out"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's grt coefficient * 0.5, grt coefficient is assigned as per
              provider's tariff based ot vessel's gross tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Mooring dues -->
        <article class="row mlb">
          <ul>
            <li>Mooring</li>
            <li id="result-mooring"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Unmooring dues -->
        <article class="row mlb">
          <ul>
            <li>Unmooring</li>
            <li id="result-unmooring"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Channel dues -->
        <article class="row mlb">
          <ul>
            <li>Channel dues</li>
            <li id="result-channel-dues"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's grt * 0.04 plus additional multiplication with
              coefficient depending on vessel type.
            </li>
          </ul>
        </article>
        <!-- Row Light dues -->
        <article class="row mlb">
          <ul>
            <li>Light dues</li>
            <li id="result-light-dues"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Sailing permission dues -->
        <article class="row mlb">
          <ul>
            <li>Sailing permission</li>
            <li id="result-sailing-permission"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Marpol dues -->
        <article class="row mlb">
          <ul>
            <li>Marpol 73/78 fee</li>
            <li id="result-marpol-fee"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage.
            </li>
          </ul>
        </article>
        <!-- Row Cargo plan dues -->
        <article class="row mlb">
          <ul>
            <li>Cargo plan verification</li>
            <li id="cargo-plan-verification"></li>
          </ul>
          <ul class="more-content">
            <li>
              Price is assigned as per provider's tariff based ot vessel's gross
              tonnage and type of operations.
            </li>
          </ul>
        </article>
        <!-- Row Oil booming dues -->
        <article class="row mlb">
          <ul>
            <li>Laying of oil booms</li>
            <li id="result-oil-booming"></li>
          </ul>
          <ul class="more-content">
            <li>
              Vessel's loa * 2.5 * 0.15 * hours at berth + 100 coefficient *
              0.5.
            </li>
          </ul>
        </article>
        <!-- Row Total cost -->
        <article class="row mlb">
          <ul>
            <li>Total:</li>
            <li id="result-total-cost"></li>
          </ul>
          <ul class="more-content">
            <li class="export-file">
              <a href="#">Export as PDF</a>
              <a href="#">Share as PDF</a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  </section>
`

export function createPdaPage(ctx) {
  ctx.render(createPdaTemplate(onSubmit))

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    const terminal = formData.get("terminal").trim()
    const type = formData.get("vessel-type").trim()
    const operation = formData.get("operations").trim()
    const condition = formData.get("conditions").trim()
    const grt = formData.get("grt").trim()
    const loa = formData.get("loa").trim()
    const hours = formData.get("hours").trim()
    const pdaData = { terminal, type, operation, condition, grt, loa, hours }
    if (Object.values(pdaData).some((x) => !x)) {
      return alert("Please fill all the required fields")
    } else {
      await calculateProforma(pdaData)
      onRender(generatedVarnaEastProforma)
      await createProforma(pdaData, generatedVarnaEastProforma)
      // ctx.page.redirect("/dashboard")
    }
  }
}

function onRender(pda) {
  document.getElementById("port-name").textContent = pda.terminal
  document.getElementById("result-tonnage-dues").textContent = pda.tonnageDues
  document.getElementById("result-berth-dues").textContent = pda.berthDues
  document.getElementById("result-pilotage-in").textContent = pda.pilotageInDues
  document.getElementById("result-pilotage-out").textContent =
    pda.pilotageOutDues
  document.getElementById("result-towage-in").textContent = pda.towageInDues
  document.getElementById("result-towage-out").textContent = pda.towageOutDues
  document.getElementById("result-mooring").textContent = pda.mooringDues
  document.getElementById("result-unmooring").textContent = pda.unmooringDues
  document.getElementById("result-channel-dues").textContent = pda.channelDues
  document.getElementById("result-light-dues").textContent = pda.lightDues
  document.getElementById("cargo-plan-verification").textContent =
    pda.cargoPlanDues
  document.getElementById("result-oil-booming").textContent = pda.oilBoomingDues
  document.getElementById("result-sailing-permission").textContent =
    pda.sailingPermissionDues
  document.getElementById("result-marpol-fee").textContent = pda.marpolDues
  document.getElementById("result-total-cost").textContent = pda.totalDues
}
