const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listRef = document.querySelector("ul#gallery");
const imgItem = document.createElement("img");
const createGallery = (images) => {
  imgItem.setAttribute("src", images.url);
  imgItem.setAttribute("alt", images.alt);
  listRef.insertAdjacentHTML(
    "beforeend",
    `<li> <img src=${imgItem.src}, alt=${imgItem.alt} /></li>`
  );
  return;
};
console.log(images.map(createGallery));
//listRef.style.display = "flex";
//listRef.style.justifyContent = "space-between";
