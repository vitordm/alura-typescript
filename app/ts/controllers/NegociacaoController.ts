class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView("#negociacoesView");

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacaoView.update();
    }

    adiciona(event : Event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ",")),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        this._negociacoes.add(negociacao);
        
        this._negociacoes.toArray().forEach(n => console.log(n));
    }

}