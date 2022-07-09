window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onCreate);
});

async function onCreate(event) {
  const url = event.preventDefault();
  const form = event.target;
}
