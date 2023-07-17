const textInputSize = document.querySelector('#font-size-control')
const textSpanSize = document.querySelector('#text')

textInputSize.addEventListener ('input', event => {
textSpanSize.style.fontSize = `${event.currentTarget.value}px`
});
