class NegociacaoView extends View {
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
                ${model.toArray().map(n => {
            `<tr>
                        <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>`;
        })}
            </tbody>
            <tfoot>
            </tfoot>
        </table>               
        `;
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
