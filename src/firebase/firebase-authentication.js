import { setUserData } from "../utilities/util.js"
import { auth, signInWithEmailAndPassword } from "../firebase/firebase-setup.js"

export async function onLogin(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const email = formData.get("email").trim()
  const password = formData.get("password").trim()

  if (email === "" || password === "") {
    return alert("All fields are required")
  }

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const userData = {
      id: userCredentials.user.uid,
      email: userCredentials.user.email,
      token: userCredentials.user.accessToken,
    }
    setUserData(userData)
    ctx.updateUserNav()
    ctx.page.redirect("/dashboard")
  } catch (error) {
    alert(error.message)
  }
}
