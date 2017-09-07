class Template {
  static successTemplate(data) {
    return `
        <div class="display-img">
          <img src="img/credfashion.png">
        </div>
        <p class="welcome-msg statement">Olá, ${data.name}. Seu saldo é:</p>
        <p class="welcome-msg total-value">R$ ${data.total}</p>
        <p class="welcome-msg hint">Aproveite para utilizar os seu pontos em qualquer uma de nossas lojas da Rede Etiqueta Modas!</p>
        <button class="js-new-query button">Nova Consulta</button>
    `
  }

  static normalTemplate() {
    return `
    <form class="js-form-consult" onsubmit="cancelSubmit(e)">
      <div class="display-img"> <img src="img/credfashion.png"> </div>
      <h1 class="welcome-msg">Digite o seu CPF para realizar a consulta</h1>
      <input type="text" placeholder="" class="js-input-cpf">
      <span class="input-error is-hidden">CPF inválido</span>
    </form>
    <button class="button">Consultar</button>
        `
  }
}

module.exports = Template
