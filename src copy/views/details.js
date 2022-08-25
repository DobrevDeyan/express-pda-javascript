import { html } from "../lib.js"
import { getShoeById, deleteShoe } from "../api/data.js"
import { getUserData } from "../util.js"

const detailsTemplate = (shoe, isOwner, model, ctx) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${shoe.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
      <p>Model: <span id="details-model">${shoe.model}</span></p>
      <p>Release date: <span id="details-release">${shoe.release}</span></p>
      <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
      <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner
        ? html`
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a
              href="javascript:void(0)"
              @click=${(e) => model.deleteHand(model.shoe._id, e, ctx)}
              id="delete-btn"
              >Delete</a
            >
          `
        : null}
    </div>
  </div>
</section>`

export async function detailsPage(ctx) {
  const shoe = await getShoeById(ctx.params.id)

  const userData = getUserData()
  const isOwner = userData && shoe._ownerId === userData.id

  let model = {
    shoe,
    deleteHand,
  }

  ctx.render(detailsTemplate(shoe, isOwner, model, ctx))
}

async function deleteHand(id, e, ctx) {
  await deleteShoe(id)
  ctx.page.redirect("/dashboard")
}
