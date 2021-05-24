const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsContainer = document.querySelector("#ingredients");

const elements = ingredients.map((item) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("ingredients__item");
  ingredientItem.textContent = item;
  return ingredientItem;
});
console.log(elements);
ingredientsContainer.append(...elements);
