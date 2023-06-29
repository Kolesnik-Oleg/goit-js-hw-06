const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const liElements = ingredients.map((ingredients) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = "ingredients";
  return itemEl;
})
console.log(liElements);
list.append(...liElements);


