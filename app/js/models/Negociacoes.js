class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    add(negociacao) {
        this._negociacoes.push(negociacao);
    }
    toArray() {
        return [].concat(this._negociacoes);
    }
}
