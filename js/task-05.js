const eventInput = document.querySelector('#name-input');
const eventOutput = document.querySelector('#name-output');

eventInput.addEventListener('input', handlerInputchange);

function handlerInputchange(event) {
    eventOutput.textContent = event.currentTarget.value;
    if (eventOutput.textContent.length === 0) {
        eventOutput.textContent = 'Anonymous';
    }
}
