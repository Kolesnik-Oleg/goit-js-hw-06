const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);
itemEl.forEach(function (item) {
    console.log("Categories:", item.children[0].textContent);
    console.log("Elements:", item.children[1].children.length);
});
