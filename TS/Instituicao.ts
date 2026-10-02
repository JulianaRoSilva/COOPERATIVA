import { Nomeada } from "./Interfaces/Nomeada";

export class Instituicao implements Nomeada {
    
    protected nome: string;
    protected endereco: string;
    protected pessoasAtendidas: number;

    constructor(n: string, e: string, p: number){
        this.nome = n;
        this.endereco = e;
        this.pessoasAtendidas = p;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEndereco(): string {
        return this.endereco;
    }

}