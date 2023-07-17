const body = document.querySelector('body');
const changeBtnColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}

changeBtnColor.addEventListener('click', changeColor)
