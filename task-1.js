const linkRef = document.querySelectorAll("li.item").length;
console.log(`В списке ${linkRef} категории`);

const titleRef = document.querySelectorAll("li.item");
titleRef.forEach(function (item) {
  console.log(`Категория: ${item.querySelector("h2").innerText}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
});
