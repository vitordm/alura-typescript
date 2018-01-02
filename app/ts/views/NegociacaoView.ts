import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';
export class NegociacaoView extends View<Negociacoes> {

    template(model: Negociacoes): string {
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
                ${model.toArray().map(n =>
                `<tr>
                        <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>`
            ).join("")}
            </tbody>
            <tfoot>
            </tfoot>
        </table>               
        `;
    }

}