import { html } from "../utilities/lib.js"
import { calculateProforma } from "../calculator/pda-calculator.js"

const createPdaTemplate = (onSubmit) => html`
  <section id="create-pda">
    <main>
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
                <option></option>
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
        </form>
        <div class="col-3">
          <div class="table-info">
            <p>
              Dear Customers, <br /><br />
              kindly be guided that the provided expenses are up to date with
              currently in force tariffs from local providers.<br /><br />
              Basis the type of operation, cargo and taking into account local
              compliances, the provided values can be subject to change. For
              more information about specific inquiries, do not hesitate to
              contact us.
            </p>
            <p>
              Please follow the below input fields and provide exact particulars
              basis ships valid certificates
            </p>
          </div>
        </div>
      </div>

      <div class="table-wrapper">
        <!-- Row title -->
        <div class="title">
          <li>Service</li>
          <li class="port-name">Port Varna East</li>
          <li>Price in EUR</li>
        </div>
        <!-- Row Tonnage dues -->
        <article class="row mlb">
          <ul>
            <li>Tonnage dues</li>
            <li id="ve-result-tonnage-dues">10000</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Berth dues -->
        <article class="row mlb">
          <ul>
            <li>Berth dues</li>
            <li id="ve-result-berth-dues">2000</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Pilotage in dues -->
        <article class="row mlb">
          <ul>
            <li>Pilotage In</li>
            <li id="ve-result-pilotage-in">32323</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>

        <!-- Row Pilotage out dues -->
        <article class="row mlb">
          <ul>
            <li>Pilotage out</li>
            <li id="ve-result-pilotage-out">2121</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Towage in dues -->
        <article class="row mlb">
          <ul>
            <li>Towage in</li>
            <li id="ve-result-towage-in">010100</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Towage out dues -->
        <article class="row mlb">
          <ul>
            <li>Towage out</li>
            <li id="ve-result-towage-out">2312</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Mooring dues -->
        <article class="row mlb">
          <ul>
            <li>Mooring</li>
            <li id="ve-result-mooring">1111</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Unmooring dues -->
        <article class="row mlb">
          <ul>
            <li>Unmooring</li>
            <li id="ve-result-unmooring">111</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Channel dues -->
        <article class="row mlb">
          <ul>
            <li>Channel dues</li>
            <li id="ve-result-channel-dues">222</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Light dues -->
        <article class="row mlb">
          <ul>
            <li>Light dues</li>
            <li id="ve-result-light-dues">333</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Sailing permission dues -->
        <article class="row mlb">
          <ul>
            <li>Sailing permission</li>
            <li id="ve-result-sailing-permission">444</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Marpol dues -->
        <article class="row mlb">
          <ul>
            <li>Marpol 73/78 fee</li>
            <li id="ve-result-marpol-fee">2222</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Cargo plan dues -->
        <article class="row mlb">
          <ul>
            <li>Cargo plan verification</li>
            <li id="ve-cargo-plan-verification">2313</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Oil booming dues -->
        <article class="row mlb">
          <ul>
            <li>Laying of oil booms</li>
            <li id="ve-oilbooming">32312</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
        <!-- Row Total cost -->
        <article class="row mlb">
          <ul>
            <li>Total:</li>
            <li id="ve-result-total-cost">3213</li>
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
    }
    // ctx.page.redirect("/dashboard")
  }
}
