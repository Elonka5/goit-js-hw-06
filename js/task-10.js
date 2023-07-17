const inputEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

let sizeDefault = 30;

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let idx = 0; idx < amount; idx += 1) {
    const addDivBoxes = document.createElement("div");
    addDivBoxes.style.width = 30 + 10 * idx + "px";
    addDivBoxes.style.height = 30 + 10 * idx + "px";
    addDivBoxes.style.marginTop = "20px";
    divBoxes.style.display = "flex";
    divBoxes.style.flexWrap = "wrap";
    divBoxes.style.gap = "24px";
    addDivBoxes.style.backgroundColor = getRandomHexColor();
    divBoxes.append(addDivBoxes);
  }
}

function onCreateBtnClick() {
  const amount = Number(inputEl.value);
  inputEl.value = "";
  createBoxes(amount);
}

function destroyBoxes() {
  divBoxes.remove();
}
