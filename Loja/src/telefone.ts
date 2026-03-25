export class Telefone{
    _ddd : string;
    _numero : string;
    _tipo : string;

    constructor(ddd : string, numero : string, tipo : string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
    get ddd(){
        return this._ddd;
    }
    set ddd(tipo){
        this._ddd = tipo;
    }
    get numero(){
        return this._numero;
    }
    set numero(tipo){
        this.numero = tipo;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
}