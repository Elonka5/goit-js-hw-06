const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('#ingredients');

const liIngredients = ingredients.map((ingredient) => {
  const liEl = document.createElement ('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return liEl;
});

ulIngredients.append(...liIngredients);

