const inputCurrentValue = document.querySelector('#name-input');

const changeName = document.querySelector('#name-output')

const changeNameByInput = event => changeName.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous'

inputCurrentValue.addEventListener('input',changeNameByInput)
