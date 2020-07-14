import { Contato } from './Contato';
import { Endereco } from './Endereco';

export class Cliente{
    public id: number;
    public nome: string;
    public telefone: string;
    public email: string;
    public cpfCnpj: string;
    public contato: Contato;
    public seguimento: string;
    public endereco: Endereco;

    // Cliente(id, nome, telefone, email, cpfCnpj, contato){
    //     this.id = id;
    //     this.nome = nome;
    //     this.telefone = telefone;
    //     this.email = email;
    //     this.cpfCnpj = cpfCnpj;
    // }
}