const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementBtnClick = () => valueEl.textContent = counterValue -= 1;

const onIncrementBtnClick = () => valueEl.textContent = counterValue += 1;

decrementBtn.addEventListener("click",onDecrementBtnClick);

incrementBtn.addEventListener("click", onIncrementBtnClick);

