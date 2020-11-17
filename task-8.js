const inputRef = document.querySelector("input.number");
const btnRender = document.querySelector("button[data-action='render']");
const btnDestroy = document.querySelector("button[data-action='destroy']");
const boxesRef = document.querySelector("div#boxes");
let number;

function createBoxes() {
  let number = inputRef.value;

  for (let i = 0; i < Number(number); i += 1) {
    const div = document.createElement("div");

    div.style.height = `${30 + i * 10}px`;
    div.style.width = `${30 + i * 10}px`;

    const r = Math.floor(Math.random() * 200) + 56;
    const g = Math.floor(Math.random() * 200) + 56;
    const b = Math.floor(Math.random() * 200) + 56;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    div.style.backgroundColor = rgb;
    boxesRef.appendChild(div);
  }
}

function destroy() {
  const array = document.querySelectorAll("div#boxes > div");
  //console.log(array);
  array.forEach((element) => {
    element.remove();
  });
}

btnDestroy.addEventListener("click", destroy);
btnRender.addEventListener("click", createBoxes);
