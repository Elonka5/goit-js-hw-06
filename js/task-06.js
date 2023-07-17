const eventInput = document.querySelector("#validation-input");

const handlerCheckInput = () => {
  if (eventInput.value.length !== Number(eventInput.dataset.length)) {
    eventInput.classList.add("invalid");
  } else {
    eventInput.classList.remove("invalid");
    eventInput.classList.add("valid");
  }
};

eventInput.addEventListener("blur", handlerCheckInput);

