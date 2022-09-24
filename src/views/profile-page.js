import { html } from "../utilities/lib.js"
// import { getShoeByBrand } from "../api/data.js"

const searchTemplate = (onChange, onSearch, shoes = []) => html`
  <section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper">
      <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
        @input=${onChange}
      />
      <button type="submit" @click=${onSearch}>Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      <!-- <ul class="card-wrapper"> -->
      <!-- Display a li with information about every post (if any)-->
      ${shoes.length == 0
        ? html`<h2>There are no results found.</h2> `
        : html` <ul class="card-wrapper">
            ${shoes.map(shoeTemplate)}
          </ul>`}
      <!-- </ul> -->

      <!-- Display an h2 if there are no posts -->
      <!-- <h2>There are no results found.</h2> -->
    </div>
  </section>
`

export async function profilePage(ctx) {
  ctx.render(searchTemplate())
  let currentSearch = ""

  // const onSearchChange = (event) => {
  //   currentSearch = event.target.value
  // }
  // const onSearchClick = () => {
  //   let brand = currentSearch

  //   getShoeByBrand(brand).then((shoes) => {
  //     ctx.render(searchTemplate(onSearchChange, onSearchClick, shoes))
  //   })
  // }

  // ctx.render(searchTemplate(onSearchChange, onSearchClick))
}
