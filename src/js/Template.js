class Template {
  static successTemplate(data) {
    return `
        <div class="display-img"> <img src="img/credfashion.png"> </div>
        <h2 class="welcome-msg">Olá, ${data.name}. Seu saldo é:</h2>
        <h1 class="welcome-msg">R$ ${data.total}</h1>
        <h2 class="welcome-msg">Aproveite para utilizar os seu pontos em qualquer uma de nossas lojas da Rede Etiqueta Modas!</h2>
        <button class="js-new-query button">Nova Consulta</button>
    `
  }

  static normalTemplate() {
    return `
    <form onsubmit="function(e){e.preventDefault()}">
        <div class="display-img"> <img src="img/credfashion.png"> </div>
        <h1 class="welcome-msg">Digite o seu CPF para realizar a consulta</h1>
        <input type="text" placeholder="" class="js-input-cpf" pattern="\\d{3}.\\d{3}.\\d{3}-\\d{2}">
        <button class="button" type="submit">Consultar</button>
    </form>
        `
  }
}

module.exports = Template
