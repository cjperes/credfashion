/* Requires */
const VMasker = require('vanilla-masker')
const Template = require('./js/Template')
// const Customer = require('./model/Customer')
const CardFactory = require('./CardFactory')

/* Elements */
const $cpfInputElement = document.querySelector('.js-input-cpf')
const $displayLineElement = document.querySelector('.display-line')
const $errorSpan = document.querySelector('.input-error')

/* Functions */
/* eslint-disable */
const cancelSubmit = event => event.preventDefault()
/* eslint-enable */
const isValidInput = () => {
  const cpf = $cpfInputElement.value
  const cpfRegex = /\d{3}.\d{3}.\d{3}-\d{2}/gi
  return cpfRegex.test(cpf)
}
const handleErrorStatement = () => {
  $errorSpan.classList.remove('is-hidden')
  $cpfInputElement.classList.add('is-error')
}

/* Events and behaviour */
VMasker($cpfInputElement).maskPattern('999.999.999-99')
$displayLineElement.addEventListener('click', function (event) {
  const isButton = event.target.classList.contains('button')

  if (isButton) {
    const isNewQuery = event.target.classList.contains('js-new-query')

    if (isNewQuery) {
      this.innerHTML = Template.normalTemplate()
      return
    }
    if (isValidInput()) {
      this.innerHTML = Template.successTemplate({ name: 'Raul', total: 100 })
    } else {
      handleErrorStatement()
    }
  }
})

CardFactory.queryPoints('').then(res => console.log(res))
