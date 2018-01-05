import { IComparable } from "./IComparable";

export class Negociacao implements IComparable<Negociacao> {
    
    constructor( readonly data : Date, readonly quantidade : number, readonly valor : number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    equals(compare : Negociacao): boolean {
        return this.data.getDate() == compare.data.getDate()
        && this.data.getMonth() == compare.data.getMonth()
        && this.data.getFullYear() == compare.data.getFullYear();
        //&& this.quantidade == compare.quantidade 
        //&& this.valor == compare.valor
        
    }
    
}

