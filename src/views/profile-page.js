import { html } from "../utilities/lib.js"
import { getUserData } from "../utilities/util.js"

const profileTemplate = (user) => html` <section id="profile">
  <div class="profile-container">
    <h1 class="profile-title">User profile</h1>
    <p class="profile-info">
      Welcome to your user page. Here you can find useful information about your
      stay and usage of the platform. In addition you can add a user name and
      phone number in the form below.
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
        <div class="misc-user-details">
          <form class="form-update-user-info">
            <input type="text" name="name" value="${user.id}" placeholder="" />
            <input
              type="text"
              name="name"
              placeholder="+359 888 888 888"
              value="${user.phone}"
            />
          </form>
        </div>
        <p class="mail">Registered email: ${user.email}</p>
        <div class="sms">
          <p>SMS alert activation:</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <button type="button" class="save-btn">Save</button>
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
  const user = getUserData()
  ctx.render(profileTemplate(user))
}
