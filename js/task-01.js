const liItemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItemsEl.length}`);

const liTotalEl = liItemsEl.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
