const categoryAnimals = document.querySelector(".item .animals");
console.log("категория:", categoryAnimals.textContent);
const animalEl = document.querySelectorAll(".animals__list .animals__item");
console.log("количество элементов", animalEl.length);

const categoryProducts = document.querySelector(".item .products");
console.log("категория:", categoryProducts.textContent);
const productEl = document.querySelectorAll(".products__list .products__item");
console.log("количество элементов", productEl.length);

const categoryTechnologies = document.querySelector(".item .technologies");
console.log("категория:", categoryTechnologies.textContent);
const technologiesEl = document.querySelectorAll(
  ".technology__list .technology__item"
);
console.log("количество элементов", technologiesEl.length);
