import { html } from "../utilities/lib.js"

const createPdaTemplate = (onSubmit) => html`
  <section id="create-pda">
    <main>
      <div class="form-wrapper">
        <form class="pda-conditions">
          <div class="col-1">
            <fieldset>
              <legend>Terminal</legend>
              <select id="terminal" name="terminal">
                <option value="Other"></option>
                <option value="Varna East" id="tanker">Varna East</option>
                <option value="Varna West" id="other">Varna West</option>
                <!-- <option value="Container" id="container">Container</option>
            <option value="Passenger" id="passenger">Passenger</option>
            <option value="Docking-repairs" id="docking-repairs">
              Docking/Repairs
            </option> -->
              </select>
            </fieldset>
            <fieldset>
              <legend>Ship type</legend>
              <select id="vesseltype" name="vessel-type">
                <option value="Other" id="other">Other</option>
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
                <option value="Other">Other</option>
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
                <option value="Other">Other</option>
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
            <input type="number" id="gross_tonnage" /><br />
            <label for="name">Loa:</label><br />
            <input type="number" id="length_over_all" /><br />
            <label for="name">Hours:</label><br />
            <input type="number" id="hours_at_berth" /><br />
          </div>
        </form>
        <div class="col-3">
          <div class="table-info">
            <p>
              Dear Customers, Kindly be guided that the provided expenses are up
              to date with currently in force tariffs from local providers.<br />
              Basis the type of operation, cargo and taking into account local
              compliances, the provided values can be subject to change. For
              more information about specific inquiries, do not hesitate to
              <a href="#">contact us</a> or subscribe.
            </p>
            <p>
              Please follow the below input fields and provide exact particulars
              basis ships valid certificates
            </p>
          </div>
          <input
            class="calculateButton"
            type="button"
            value="Calculate"
            onclick="calculatePDA()"
          />
        </div>
      </div>

      <div class="table-wrapper">
        <!-- Row title -->
        <div class="title">
          <li>Service</li>
          <li class="port-name">Port Varna East</li>
          <li>Price in EUR</li>
        </div>
        <!-- Row 5 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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

        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- Row 6 -->
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
        <!-- <article class="row nhl">
        <ul>
          <li><a href="#">NHL</a></li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>12:00ET</li>
        </ul>
        <ul class="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>

      <article class="row pga">
        <ul>
          <li><a href="#">PGA</a></li>
          <li>$50</li>
          <li>12</li>
          <li>48</li>
          <li>11:00ET</li>
        </ul>
        <ul class="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      <article class="row mlb">
        <ul>
          <li><a href="#">MLB</a></li>
          <li>$5</li>
          <li>48</li>
          <li>120</li>
          <li>12:00ET</li>
        </ul>
        <ul class="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article> -->
      </div>

      <!-- <div class="table-title">
        <h3>Port Varna East</h3>
      </div>
      <table class="table-fill">
        <thead>
          <tr>
            <th class="text-left">Service</th>
            <th class="text-left">Price in EUR</th>
          </tr>
        </thead>
        <tbody class="table-hover">
          <tr>
            <td>tonnage dues</td>
            <td id="ve-result-tonnage-dues"></td>
          </tr>
          <tr>
            <td>berth dues</td>
            <td id="ve-result-berth-dues"></td>
          </tr>
          <tr>
            <td>pilotage In</td>
            <td id="ve-result-pilotage-in"></td>
          </tr>
          <tr>
            <td>pilotage out</td>
            <td id="ve-result-pilotage-out"></td>
          </tr>
          <tr>
            <td>towage in</td>
            <td id="ve-result-towage-in"></td>
          </tr>
          <tr>
            <td>towage out</td>
            <td id="ve-result-towage-out"></td>
          </tr>
          <tr>
            <td>mooring</td>
            <td id="ve-result-mooring"></td>
          </tr>
          <tr>
            <td>unmooring</td>
            <td id="ve-result-unmooring"></td>
          </tr>
          <tr>
            <td>channel dues</td>
            <td id="ve-result-channel-dues"></td>
          </tr>
          <tr>
            <td>light dues</td>
            <td id="ve-result-light-dues"></td>
          </tr>
          <tr>
            <td>sailing permission</td>
            <td id="ve-result-sailing-permission"></td>
          </tr>
          <tr>
            <td>marpol 73/78 fee</td>
            <td id="ve-result-marpol-fee"></td>
          </tr>
          <tr class="cargo-verification">
            <td>cargo plan verification</td>
            <td id="ve-cargo-plan-verification"></td>
          </tr>
          <tr class="vessel-tanker">
            <td>laying of oil booms</td>
            <td id="ve-oilbooming"></td>
          </tr>
          <tr>
            <td>total:</td>
            <td id="ve-result-total-cost"></td>
          </tr>
          <tr>
            <td class="text-left">January</td>
            <td class="text-left">$ 50,000.00</td>
          </tr>
        </tbody>
      </table> -->
    </main>
  </section>
`
export function createPdaPage(ctx) {
  ctx.render(createPdaTemplate(onSubmit))

  async function onSubmit(event) {
    // event.preventDefault()
    // const formData = new FormData(event.target)
    // const brand = formData.get("brand").trim()
    // const model = formData.get("model").trim()
    // const imageUrl = formData.get("imageUrl").trim()
    // const release = formData.get("release").trim()
    // const designer = formData.get("designer").trim()
    // const value = formData.get("value").trim()
    // const shoe = { brand, model, imageUrl, release, designer, value }
    // if (Object.values(shoe).some((x) => !x)) {
    //   return alert("All fields are required")
    // }
    // await addShoe({
    //   brand,
    //   model,
    //   imageUrl,
    //   release,
    //   designer,
    //   value,
    // })
    // ctx.page.redirect("/dashboard")
    ///////
    // <div class="form">
    //   <h2>Add item</h2>
    //   <form @submit=${onSubmit} class="create-form">
    //     <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
    //     <input type="text" name="model" id="shoe-model" placeholder="Model" />
    //     <input
    //       type="text"
    //       name="imageUrl"
    //       id="shoe-img"
    //       placeholder="Image url"
    //     />
    //     <input
    //       type="text"
    //       name="release"
    //       id="shoe-release"
    //       placeholder="Release date"
    //     />
    //     <input
    //       type="text"
    //       name="designer"
    //       id="shoe-designer"
    //       placeholder="Designer"
    //     />
    //     <input type="text" name="value" id="shoe-value" placeholder="Value" />
    //     <button type="submit">post</button>
    //   </form>
    // </div>
  }
}
