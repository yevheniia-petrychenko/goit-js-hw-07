const inputRange = document.querySelector("input#font-size-control");
const spanRef = document.querySelector("span#text");
let value;

function render() {
  value = inputRange.value;
  spanRef.style.fontSize = `${value}px`;
}

inputRange.addEventListener("change", render);
