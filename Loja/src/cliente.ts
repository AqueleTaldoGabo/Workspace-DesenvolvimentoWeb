import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Cliente{
    _nome : string;
    _cpf : string;
    _data : number;
    _genero : string;
    _endereco : Endereco;
    _telefones : Telefone[];

    constructor(nome : string, cpf : string, data : number, sexo : string, endereco : Endereco, telefones : Telefone[]){
        this._nome = nome;
        this._cpf = cpf;
        this._data = data;
        this._genero = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }
    
    get nome(){
        return this._nome;
    }
    set nome(valor){
        this._nome = valor;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(valor){
        this.cpf = valor;
    }
    get data(){
        return this._data;
    }
    set data(valor){
        this._data = valor;
    }
    get genero(){
        return this._genero;
    }
    set genero(valor){
        this._genero = valor;
    }
    get endereco(){
        return this._endereco;
    }
    set endereco(valor){
        this._endereco = valor;
    }
    get telefones(){
        return this._telefones;
    }
    set telefones(valor){
        this._telefones = valor;
    }
}