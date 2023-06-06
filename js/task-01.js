const ulElements = document.querySelector('#categories');

const liItems = ulElements.querySelectorAll('.item');

console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((liItem) => {
 const h2Title = liItem.firstElementChild.textContent;
 console.log(`Category: ${h2Title}`);

 const liTotal = liItem.lastElementChild.children.length;
 console.log(`Elements: ${liTotal}`);
});

