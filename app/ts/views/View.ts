abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string) {
        //this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
    }

    abstract template(model : T) : string

    abstract update(model : T) : void


}