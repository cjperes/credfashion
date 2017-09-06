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
    <form onsubmit="cancelSubmit(e)">
        <div class="display-img"> <img src="img/credfashion.png"> </div>
        <h1 class="welcome-msg">Digite o seu CPF para realizar a consulta</h1>
        <input type="text" placeholder="" class="js-input-cpf" pattern="\\d{3}.\\d{3}.\\d{3}-\\d{2}">
        <button class="button" type="submit">Consultar</button>
    </form>
        `
  }
}

module.exports = Template
