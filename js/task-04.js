const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const counterEl = document.querySelector("#value");
decrement.addEventListener("click", () => {
  counterEl.textContent = counterValue;
  console.log((counterValue -= 1));
});

increment.addEventListener("click", () => {
  counterEl.textContent = counterValue;
  console.log((counterValue += 1));
});
