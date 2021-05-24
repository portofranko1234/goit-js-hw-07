const input = document.querySelector("#validation-input");
const passLength = 6;

input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.target.value.length === passLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
