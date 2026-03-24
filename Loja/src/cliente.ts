import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Cliente{
    _nome : string;
    _cpf : string;
    _data : number;
    _sexo : string;
    _endereco : Endereco;
    _telefones : Telefone[];

    constructor(nome : string, cpf : string, data : number, sexo : string, endereco : Endereco, telefones : Telefone[]){
        this._nome = nome;
        this._cpf = cpf;
        this._data = data;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }
    

}