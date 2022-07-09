window.addEventListener("load", async () => {
  const button = document.getElementById("logoutBtn");
  button.addEventListener("click", onLogout);
});

async function onLogout() {
  const url = "http://localhost:3030/users/logout";
  const response = await fetch(url);

  const result = await response.json();

  localStorage.clear();
  sessionStorage.clear();
  window.location = "login.html";
}
