export class Produto{
    _codigo : number;
    _descricao : string;
    _valor : number;

    constructor(codigo : number, descricao : string, valor : number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }
    get codigo(){
        return this._codigo;
    }
    set codigo(valor){
        this._codigo = valor;
    }
    get descricao(){
        return this._descricao;
    }
    set descricao(valor){
        this.descricao = valor;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}