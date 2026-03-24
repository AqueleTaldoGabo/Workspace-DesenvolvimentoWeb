import { Produto } from "./produto";
import { Cliente } from "./cliente";

class Venda{
    _codigo : number;
    _data : number;
    _cliente : Cliente;
    _produtos : Produto[];

    constructor(codigo : number, data : number, cliente : Cliente, produtos : Produto[]){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }
}