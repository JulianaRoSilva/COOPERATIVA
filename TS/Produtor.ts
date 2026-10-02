import { Comida } from "./Comida";
import { Instituicao } from "./Instituicao";
import { Nomeada } from "./Interfaces/Nomeada";

export abstract class Produtor implements Nomeada {

    protected nome: string;
    protected CPF: string;
    protected qtdDisponivelDoacao: number;

	constructor(nome: string, CPF: string, qtdAlimentos: number, c: Comida) {
        this.nome = nome;
        this.CPF = CPF;
        this.qtdDisponivelDoacao = qtdAlimentos;
    }

    public getQtdDisponivel(): number {
        return this.qtdDisponivelDoacao;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCPF(): string {
        return this.CPF;
    }
    
    // método abstrato que será subscrito em outras classes
    public abstract infoProdutor(): void;

    // método que deve ser implementado pela interface
    // USAR TRY CATCH PARA VERIFICAR SE A DOAÇÃO SERÁ EFETIVA!
    public doar(qtd: number, instituicao: Instituicao, comida: Comida): void { 

        if(qtd > this.qtdDisponivelDoacao){
            throw new Error('Erro: Não é possível doar mais do que a quantidade disponível pelo produtor')
        }

        this.qtdDisponivelDoacao -= qtd;
        console.log(`Doação realizada: ${qtd} KG de ${comida.getNome()} para a instituição ${instituicao.getNome().toUpperCase()}`);
    }
}