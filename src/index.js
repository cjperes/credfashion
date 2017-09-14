/* Requires */
const VMasker = require('vanilla-masker')
const Template = require('./template/Template')
const { getUserPoints } = require('./services/cardHttp')

/* Elements */
const $displayBgElement = document.querySelector('.display-bg')
const $displayLineElement = document.querySelector('.display-line')
let $errorSpan = document.querySelector('.input-error')
let $cpfInputElement = document.querySelector('.js-input-cpf')

/* Functions */
const handleClassList = {
  remove: (element, className) => {
    element.classList.remove(className)
  },
  add: (element, className) => {
    element.classList.add(className)
  },
}

/* eslint-disable */
const cancelSubmit = event => event.preventDefault()
/* eslint-enable */

const assignInitialElements = () => {
  $cpfInputElement = document.querySelector('.js-input-cpf')
  $errorSpan = document.querySelector('.input-error')
  VMasker($cpfInputElement).maskPattern('999.999.999-99')
}

const isValidInput = (cpf) => {
  const cpfRegex = /\d{3}.\d{3}.\d{3}-\d{2}/gi
  return cpfRegex.test(cpf)
}

const handleErrorStatement = () => {
  handleClassList.remove($errorSpan, 'is-hidden')
  handleClassList.add($cpfInputElement, 'is-error')
}

const handleFade = (element, shouldBeVisible) => {
  if (shouldBeVisible) {
    handleClassList.remove(element, 'fadeOut')
    handleClassList.add(element, 'fadeIn')
  } else {
    handleClassList.remove(element, 'fadeIn')
    handleClassList.add(element, 'fadeOut')
  }
}

const checkLoyaltyPoints = async function (event) {
  const isButton = event.target.classList.contains('button')
  if (isButton) {
    const isNewQuery = event.target.classList.contains('js-new-query')

    if (isNewQuery) {
      handleFade($displayBgElement, false)
      this.innerHTML = Template.normalTemplate()
      assignInitialElements()
      handleFade($displayBgElement, true)
      return
    }

    const cpf = $cpfInputElement.value

    if (isValidInput(cpf)) {
      const response = await getUserPoints(cpf)

      if (response.data.sts === true && response.data.data) {
        handleFade($displayBgElement, false)
        this.innerHTML = Template.successTemplate({
          name: response.data.data[0].NOME,
          total: response.data.data[0].FIDELIDADE,
        })
        handleFade($displayBgElement, true)
      } else {
        handleErrorStatement()
      }
    } else {
      handleErrorStatement()
    }
  }
}

/* Events and behaviour */
$displayLineElement.addEventListener('click', checkLoyaltyPoints)
assignInitialElements()
