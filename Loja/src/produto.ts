export class Produto{
    _codigo : number;
    _descricao : string;
    _valor : number;

    constructor(codigo : number, descricao : string, valor : number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }
}