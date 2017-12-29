System.register(["../models/Negociacao", "../models/Negociacoes", "../views/MensagemView", "../views/NegociacaoView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao_1, Negociacoes_1, MensagemView_1, NegociacaoView_1, NegociacaoController;
    return {
        setters: [
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacaoView_1_1) {
                NegociacaoView_1 = NegociacaoView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacaoView = new NegociacaoView_1.NegociacaoView("#negociacoesView");
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacaoView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.add(negociacao);
                    this._negociacaoView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionado com êxito!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
