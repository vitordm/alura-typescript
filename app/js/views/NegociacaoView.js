class NegociacaoView extends View {
    constructor(seletor) {
        super();
        this._elemento = document.querySelector(seletor);
    }
    template() {
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
            </tbody>
            <tfoot>
            </tfoot>
        </table>               
        `;
    }
    update() {
        this._elemento.innerHTML = this.template();
    }
}
