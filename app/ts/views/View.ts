abstract class View<T> {

    protected _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    abstract template(model : T) : string

    abstract update(model : T) : void


}