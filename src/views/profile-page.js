import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"

const profileTemplate = () => html` <section id="profile">
  <div class="profile-container">
    <h1 class="profile-title">User profile</h1>
    <p class="profile-info">
      Below you can find a list of all the proformas that are currently stored
      in your profile history sorted by date in descending order. Press the
      button below to see more details.
    </p>
  </div>
</section>`

export async function profilePage(ctx) {
  ctx.render(profileTemplate())
}
