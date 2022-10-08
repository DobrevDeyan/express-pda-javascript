import { html } from "../utilities/lib.js"
import {
  getFirestoreUserData,
  updateUserDetails,
} from "../firebase/firebase-authentication.js"
import {
  totalUserProformas,
  vesselsAbove20kTons,
  queriedTerminals,
  lastRequestedProforma,
  lastRequestedVessels,
} from "../firebase/firebase-operations.js"
const profileTemplate = (
  onSubmit,
  data,
  totalProformas,
  totalVessels,
  terminals,
  lastCreatedPda,
  lastQueriedVessels
) => html` <section id="profile">
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
        src="../../images/cargo ship-1.1s-200px.svg"
        alt="shipping-picture"
        class="shipping-picture"
      />
      <div class="misc-info">
        <h1>My profile</h1>
      </div>
      <div class="user-info">
        <form @submit="${onSubmit}" class="form-update-user-info">
          <div class="misc-user-details">
            <input
              type="text"
              name="user-name"
              placeholder="user-name"
              value="${data.name}"
            />
            <input
              type="text"
              name="mobile"
              placeholder="+359 888 888 888"
              value="${data.phone}"
            />
          </div>
          <div class="misc-user-details">
            <input
              type="text"
              name="company-name"
              placeholder="company name"
              value="${data.company}"
            />
            <input
              type="text"
              name="address"
              placeholder="address"
              value="${data.address}"
            />
          </div>
          <div class="misc-user-details button-helper">
            <button type="submit" class="save-btn">Save</button>
          </div>
        </form>
        <p class="mail">Registered email: ${data.email}</p>
        <div class="sms">
          <p>SMS alert activation:</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="stats-container">
      <h1>Account statistics</h1>
      <div class="misc-summary-container">
        <div class="misc-summary-details">
          <p class="">Time of last queried PDA:</p>
          <p>${lastCreatedPda}</p>
        </div>
        <div class="misc-summary-details">
          <p class="">Queried terminals at recent:</p>
          <p>${terminals}</p>
        </div>
        <div class="misc-summary-details">
          <p class="">Queried vessels at recent:</p>
          <p>${lastQueriedVessels}</p>
        </div>
        <div class="misc-summary-details">
          <p class="">Queried vessels > 20k grt:</p>
          <p>${totalVessels}</p>
        </div>
        <div class="misc-summary-details">
          <p class="">Total proformas generated:</p>
          <p>${totalProformas}</p>
        </div>
      </div>
      <div class="link-container">
        <a class="link-to-dashboard" href="/dashboard">Go to dashboard </a>
        <ion-icon name="arrow-back"></ion-icon>
      </div>
    </div>
    <div class="weather-container">
      <h1>Account status</h1>
      <div class="account-status-container">
        <div class="account-status">
          <p>Subscribe and renew payment plan:</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="account-status">
          <p>Expiration date:</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</section>`

export async function profilePage(ctx) {
  const data = await getFirestoreUserData()
  const totalProformas = await totalUserProformas()
  const totalVessels = await vesselsAbove20kTons()
  let terminals = await queriedTerminals()
  terminals = terminals.join(", ")
  const lastCreatedPda = await lastRequestedProforma()
  let lastQueriedVessels = await lastRequestedVessels()
  lastQueriedVessels = lastQueriedVessels.join(", ")

  ctx.render(
    profileTemplate(
      onSubmit,
      data,
      totalProformas,
      totalVessels,
      terminals,
      lastCreatedPda,
      lastQueriedVessels
    )
  )

  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const userName = formData.get("user-name").trim()
    const phoneNumber = formData.get("mobile").trim()
    const company = formData.get("company-name").trim()
    const address = formData.get("address").trim()
    const userDetails = { userName, phoneNumber, company, address }
    updateUserDetails(userDetails)
  }
}
