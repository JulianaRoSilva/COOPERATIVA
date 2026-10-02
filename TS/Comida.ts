import { Produtor } from "./Producer";

export class Comida {

    protected nome: string;
    protected categoria: string;
    protected qtdDisponivel: number;
    protected prodResponsavel: Produtor;

    constructor(n: string, c: string, q: number, p: Produtor){
        this.nome = n;
        this.categoria = c;
        this.qtdDisponivel = q;
        this.prodResponsavel = p;
    }

    public getNome(): string {
        return this.nome
    }
    public getcCategoria(): string {
        return this.categoria
    }
    public getQtdDisponivel(): number {
        return this.qtdDisponivel
    }
    public getProdResponsavel(): Produtor {
        return this.prodResponsavel;
    }

    // Método serve para colocar qtd ou tirar qtd 
    // Se ao receber um num negativo, - + da -
    public setQtd(val: number): void {
        this.qtdDisponivel += val;
    }

}