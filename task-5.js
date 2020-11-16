const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", render);
function render(event) {
  if (inputRef.value === "") {
    outputRef.textContent = "незнакомец";
  } else {
    outputRef.textContent = event.target.value;
  }
}
