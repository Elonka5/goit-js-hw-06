const eventInput = document.querySelector('#validation-input');

eventInput.addEventListener('blur', () => {
    if(eventInput.value.length === Number(eventInput.dataset.length)) {
        eventInput.classList.remove('invalid');
        eventInput.classList.add('valid');
        } else {
            eventInput.classList.remove('valid'); 
            eventInput.classList.add('invalid');
        }
});
