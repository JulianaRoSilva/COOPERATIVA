
import { Nomeada } from "./Interfaces/Nomeada";

export class Comida implements Nomeada {

    protected nome: string;
    protected categoria: string;

    constructor(n: string, c: string){
        this.nome = n;
        this.categoria = c;
    }

    public getNome(): string {
        return this.nome
    }
    
    public getCategoria(): string {
        return this.categoria
    }


}