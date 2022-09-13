import { html } from "../utilities/lib.js"

const createPdaTemplate = (onSubmit) => html`
  <section id="create-pda">
    <!-- <main>
      <h1>Proforma Disbursement Account Calculator Port of Varna</h1>
      <p>
        Please follow the below input fields and provide exact particulars basis
        ships valid certificates
      </p>
      <div class="form-wrapper">
        <fieldset>
          <legend>vessel type</legend>
          <select id="vesseltype" name="vessel-type">
            <option value="Other" id="other">Other</option>
            <option value="Tanker" id="tanker">Tanker</option>
            <option value="Container" id="container">Container</option>
            <option value="Passenger" id="passenger">Passenger</option>
            <option value="Docking-repairs" id="docking-repairs">
              Docking/Repairs
            </option>
            <option value="Navy" id="navy">Navy</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>operations</legend>
          <select id="operations" name="operations">
            <option value="Other">Other</option>
            <option value="Loading" id="loading">Loading</option>
            <option value="Discharging" id="discharging">Discharging</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>special conditions</legend>
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
            <option value="Discharging" id="discharging">Discharging</option>
          </select>
        </fieldset>
        <form class="right">
          <label for="name">GT/RGT:</label><br />
          <input type="number" id="gross_tonnage" /><br />
          <label for="name">LOA:</label><br />
          <input type="number" id="length_over_all" /><br />
          <label for="name">Hours at berth:</label><br />
          <input type="number" id="hours_at_berth" /><br />
        </form>
      </div>
      <input
        class="caclbutton"
        type="button"
        value="Calculate"
        onclick="calc()"
      /> -->

    <section class="wrapper">
      <!-- Row title -->
      <div class="title">
        <li>Sport</li>
        <li>Entry</li>
        <li>Max</li>
        <li>Time</li>
      </div>
      <!-- Row 1 - fadeIn -->
      <!-- <section class="row-fadeIn-wrapper">
        <article class="row fadeIn nfl">
          <ul>
            <li><a href="#">NFL</a><span class="small">(fadeIn)</span></li>
            <li>$50</li>
            <li>12</li>
            <li>48</li>
            <li>2:00ET</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
      </section> -->
      <!-- Row 2 - fadeOut -->
      <!-- <section class="row-fadeOut-wrapper">
        <article class="row nfl">
          <ul>
            <li><a href="#">NFL</a><span class="small">(fadeOut)</span></li>
            <li>$5</li>
            <li>45</li>
            <li>100</li>
            <li>3:00ET</li>
          </ul>
          <ul class="more-content">
            <li>
              This 1665-player contest boasts a $300,000.00 prize pool and pays
              out the top 300 finishing positions. First place wins $100,000.00.
              Good luck!
            </li>
          </ul>
        </article>
      </section> -->
      <!-- Row 3 -->
      <article class="row nfl">
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
      <!-- Row 4 -->
      <article class="row mlb update-row">
        <ul>
          <li><a href="#">MLB</a><span class="small">(update)</span></li>
          <li>$10</li>
          <li><span class="update1">1</span><span class="update2">2</span></li>
          <li>10</li>
          <li>1:00ET</li>
        </ul>
        <ul class="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
      <!-- Row 5 -->
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
      </article>
      <!-- Row 6 -->
      <article class="row nhl">
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
      <!-- Row 7 -->
      <article class="row nhl">
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
      <!-- Row 8 -->
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
      <!-- Row 9 -->
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
      <!-- Row 10 -->
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
      <!-- Row 11 -->
      <article class="row mlb">
        <ul>
          <li><a href="#">MLB</a></li>
          <li>$10</li>
          <li>1</li>
          <li>10</li>
          <li>1:00ET</li>
        </ul>
        <ul class="more-content">
          <li>
            This 1665-player contest boasts a $300,000.00 prize pool and pays
            out the top 300 finishing positions. First place wins $100,000.00.
            Good luck!
          </li>
        </ul>
      </article>
    </section>

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
    <!-- <div class="useful-info">
        <p>
          Dear Customers, Kindly be guided that the provided expenses are up to
          date with currently in force tariffs from local providers.<br />
          Basis the type of operation, cargo and taking into account local
          compliances, the provided values can be subject to change. For more
          information about specific inquiries, do not hesitate to
          <a href="contact_us.html">contact us</a> or subscribe.
        </p>
      </div> -->
    <!-- </main> -->
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
