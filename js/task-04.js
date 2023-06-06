const currentValue = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const handlerDecClick = () => currentValue.textContent = `${counterValue -= 1}`;
const handlerIncClick = () => currentValue.textContent = `${counterValue += 1}`;


decrementBtn.addEventListener('click', handlerDecClick);
incrementBtn.addEventListener('click', handlerIncClick);

