import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"

const profileTemplate = () => html` <section id="profile">
  <div class="profile-container">
    <h1 class="profile-title">User profile</h1>
    <p class="profile-info">
      Welcome to your user page. Here you can find useful information about your
      stay and usage of the platform.
    </p>
  </div>
  <div class="profile-wrapper">
    <div class="user-container">
      <p class="profile-info">
        Welcome to your user page. Here you can find useful information about
        your stay and usage of the platform.
      </p>
    </div>
    <div class="payments-container">
      <p class="profile-info">
        Welcome to your user page. Here you can find useful information about
        your stay and usage of the platform.
      </p>
    </div>
    <div class="summary-container">
      <p class="profile-info">
        Welcome to your user page. Here you can find useful information about
        your stay and usage of the platform.
      </p>
    </div>
  </div>
</section>`

export async function profilePage(ctx) {
  ctx.render(profileTemplate())
}
