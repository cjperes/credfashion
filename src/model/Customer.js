class Customer {
  constructor(name, fidelidade) {
    this._name = name
    this._fidelidade = fidelidade
  }

  get name() {
    return this._name
  }

  get fidelidade() {
    return this._fidelidade
  }
}

module.exports = Customer
