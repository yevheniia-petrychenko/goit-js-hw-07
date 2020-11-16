let counteValue = 0;
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");
const htmlValue = document.querySelector("span#value");
function increment() {
  counteValue += 1;
  render();
}
function decrement() {
  counteValue -= 1;
  render();
}
function render() {
  htmlValue.textContent = counteValue;
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
