const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("ul#ingredients");
// let li;
// listRef.append(
//   ...ingredients.map(function (ingredient) {
//     li = document.createElement("li");
//     li.textContent = ingredient;
//     return li;
//   })
// );

let li1 = document.createElement("li");
li1.textContent = ingredients[0];
let li2 = document.createElement("li");
li2.textContent = ingredients[1];
let li3 = document.createElement("li");
li3.textContent = ingredients[2];
let li4 = document.createElement("li");
li4.textContent = ingredients[3];
let li5 = document.createElement("li");
li5.textContent = ingredients[4];
let li6 = document.createElement("li");
li6.textContent = ingredients[5];
listRef.append(li1, li2, li3, li4, li5, li6);
