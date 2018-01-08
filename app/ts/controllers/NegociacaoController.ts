import { Negociacao, Negociacoes, NegociacaoParcial } from "../models/index";
import { MensagemView, NegociacaoView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegociacaoService } from "../services/index";

export class NegociacaoController {
    @domInject("#data")
    private _inputData: JQuery;  //HTMLInputElement;
    @domInject("#quantidade")
    private _inputQuantidade: JQuery;  //HTMLInputElement;
    @domInject("#valor")
    private _inputValor: JQuery;  //HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");
    private _service = new NegociacaoService();

    constructor() {
        //this._inputData = $('#data'); //<HTMLInputElement>document.querySelector('#data');
        //this._inputQuantidade = $('#quantidade'); //<HTMLInputElement>document.querySelector('#quantidade');
        //this._inputValor = $('#valor')//<HTMLInputElement>document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {
        let data = new Date(this._inputData.val().replace(/-/g, ","));

        if (!this.isDiaUtil(data)) {
            this._mensagemView.update("Negociações so poderão ser incluidas em dias úteis!");
            return;
        }

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.add(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com êxito!");
    }

    @throttle()
    importaDados() {

        this._service.obterNegociacoes((res : Response) => {
            if (res.ok)
                return res;
            throw new Error(res.statusText);
        })
        .then(toImportar => { 
            const negociacoesJaImportadas = this._negociacoes.toArray();
            toImportar.filter(negociacao =>
                !negociacoesJaImportadas.some(jaImportada => negociacao.equals(jaImportada))
            ).forEach(n => this._negociacoes.add(n));

            this._negociacaoView.update(this._negociacoes);
        })
        .catch(err => this._mensagemView.update(err.message));

    }

    private isDiaUtil(data: Date) {
        return (data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado);
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}