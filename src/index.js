const VMasker = require('vanilla-masker')
const Template = require('./js/Template')

/* Elements */
const $cpfInputElement = document.querySelector('.js-input-cpf')
const $displayLineElement = document.querySelector('.display-line')

VMasker($cpfInputElement).maskPattern('999.999.999-99')

$displayLineElement.addEventListener('click', function (e) {
  const isButton = e.target.classList.contains('button')

  if (isButton) {
    const isNewQuery = e.target.classList.contains('js-new-query')

    this.innerHTML = isNewQuery
      ? Template.normalTemplate()
      : Template.successTemplate({ name: 'Raul', total: 100 })
  }
})
