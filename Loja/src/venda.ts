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
    
    get codigo(){
        return this._codigo;
    }
    set codigo(valor){
        this._codigo = valor;
    }
    get data(){
        return this._data;
    }
    set data(valor){
        this._data = valor;
    }
    get cliente(){
        return this._cliente;
    }
    set cliente(valor){
        this._cliente = valor;
    }
    get produtos(){
        return this._produtos;
    }
    set produtos(valor){
        this._produtos = valor;
    }

    calcularTotal(){
        let total : number = 0;
        for (let i = 0; i < this._produtos.length; i++){
            total += this._produtos[i]!.valor;
        }
    }
}