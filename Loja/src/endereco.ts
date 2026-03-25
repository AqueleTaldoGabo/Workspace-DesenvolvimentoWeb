export class Endereco{
    _rua : string;
    _numero : number;
    _cidade : string;
    _estado : string;

    constructor(rua : string, numero : number, cidade : string, estado : string){
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua(){
        return this._rua;
    }
    set rua(valor){
        this._rua = valor;
    }
    get numero(){
        return this._numero;
    }
    set numero(valor){
        this.numero = valor;
    }
    get cidade(){
        return this._cidade;
    }
    set cidade(valor){
        this._cidade = valor;
    }
    get estado(){
        return this._estado;
    }
    set estado(valor){
        this._estado = valor;
    }
}