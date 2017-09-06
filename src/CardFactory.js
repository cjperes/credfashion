const axios = require('axios')

const url =
  'http://rarochat.ddns.me:8080/etiqueta/clientes/?token=ecc06c8d79d3d67b0df5d27004e57c37&cliente='

class CardFactory {
  static async queryPoints(cpf) {
    const response = await axios.get(url + cpf)
    console.log(response)
    return response
  }
}

module.exports = CardFactory
