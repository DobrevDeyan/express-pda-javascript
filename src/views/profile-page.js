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
      <img
        src="../../images/profile-img.png"
        alt="profile-picture"
        class="profile-picture"
      />
      <div class="misc-info">
        <h1>My profile</h1>
        <div class="misc-info-details">
          <p>Last login: 11.11.1111 04:54</p>
          <p>Adress Rozq 25 vh B etaj 2</p>
        </div>
      </div>
      <div class="user-info">
        <p>Name</p>
        <p>Phone:</p>
        <p>Email</p>
        <p>SMS Alert: On</p>
      </div>
      <button type="button" class="generate-btn">Generate PDAs</button>
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
