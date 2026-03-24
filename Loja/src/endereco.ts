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

}