import { Negociacao } from "../models/index";
import { NegociacaoParcial } from "../models/index";

export class NegociacaoService {
    

    obterNegociacoes(handler: ResponseHandler ) : Promise<Negociacao[]> {
        const apiUrl = "http://localhost:8080/dados";

        return fetch(apiUrl)
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados : NegociacaoParcial[]) => 
                dados.map(n => new Negociacao(new Date(), n.vezes, n.montante))  
            )
            .catch(err => {
                console.log(err);
                throw new Error("Não foi possível importar!");
            });
        
    }
}

export interface ResponseHandler {
    (res: Response) : Response
}