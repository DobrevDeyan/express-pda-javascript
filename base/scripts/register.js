window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onLogin);
});

async function onLogin(event) {
  event.preventDefault();

  const url = "http://localhost:3030/users/register";
  const form = event.target;
  const formData = new FormData(form);

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("rePass").trim();

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok !== true) {
      const error = await response.json();
      throw new Error(`${error.message}`);
    }
    const result = await response.json();
    const token = result.accessToken;

    localStorage.setItem("token", token);
    window.location = "index.html";
    console.log(response);
  } catch (error) {
    alert(error.message);
  }
}
