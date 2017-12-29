class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacaoView = new NegociacaoView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.add(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com êxito!");
    }
}
