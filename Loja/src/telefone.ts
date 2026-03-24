export class Telefone{
    _ddd : string;
    _numero : string;
    _tipo : string;

    constructor(ddd : string, numero : string, tipo : string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
}