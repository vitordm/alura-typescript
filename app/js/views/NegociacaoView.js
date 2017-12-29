System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacaoView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacaoView = class NegociacaoView extends View_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.toArray().map(n => `<tr>
                        <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>`).join("")}
            </tbody>
            <tfoot>
            </tfoot>
        </table>               
        `;
                }
                update(model) {
                    this._elemento.html(this.template(model));
                }
            };
            exports_1("NegociacaoView", NegociacaoView);
        }
    };
});
