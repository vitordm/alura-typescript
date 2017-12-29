import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { MensagemView } from "../views/MensagemView";
import { NegociacaoView } from "../views/NegociacaoView";

export class NegociacaoController {
    private _inputData: JQuery;  //HTMLInputElement;
    private _inputQuantidade: JQuery;  //HTMLInputElement;
    private _inputValor: JQuery;  //HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._inputData = $('#data'); //<HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = $('#quantidade'); //<HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = $('#valor')//<HTMLInputElement>document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ",")),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.add(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com êxito!");
    }

}