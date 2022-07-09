window.addEventListener("DOMContentLoaded", start);

async function start() {
  const token = localStorage.getItem("token");
  if (token !== null) {
    document.getElementById("user").style.display = "inline-block";
  } else {
    document.getElementById("guest").style.display = "inline-block";
  }

  const main = document.querySelector("main");
  const recipes = await getRecipes();

  main.replaceChildren();
  recipes
    .map(createRecipePreview)
    .forEach((recipe) => main.appendChild(recipe));
}

function createRecipePreview(recipe) {
  const preview = document.createElement("article");
  preview.className = "preview";
  preview.innerHTML = ` <div class="title">
                            <h2>${recipe.name}</h2>
                        </div>
                        <div class="small">
                            <img src="${recipe.img}">
                        </div>`;

  preview.addEventListener("click", () => {
    preview.querySelector("h2").textContent = "Loading ...";
    toggleRecipePreview(recipe._id, preview);
  });
  return preview;
}
async function toggleRecipePreview(id, preview) {
  const recipe = await getRecipeById(id);
  const originalPreview = await createRecipePreview(recipe);
  const recipePreview = document.createElement("article");
  recipePreview.innerHTML = `
                <h2>${recipe.name}</h2>
                <div class="band">
                    <div class="thumb">
                        <img src="${recipe.img}">
                    </div>
                    <div class="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                            ${recipe.ingredients
                              .map((i) => `<li>${i}</li>`)
                              .join("")} 
                        </ul>
                    </div>
                </div>
                <div class="description">
                    <h3>Preparation:</h3>
                    ${recipe.steps.map((s) => `<p>${s}</p>`).join("")}
                </div>
  `;

  preview.replaceWith(recipePreview);

  recipePreview.addEventListener("click", () => {
    recipePreview.replaceWith(originalPreview);
  });
}

async function getRecipes() {
  const recipesURl =
    "http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg";
  const response = await fetch(recipesURl);
  const data = await response.json();
  return Object.values(data); // return only the required data in array type
}
async function getRecipeById(id) {
  const recipe = `http://localhost:3030/data/recipes/${id}`;
  const response = await fetch(recipe);
  const data = await response.json();
  return data;
}
