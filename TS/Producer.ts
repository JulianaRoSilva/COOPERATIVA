
export abstract class Produtor {

    protected nome: string;
    protected CPF: string;
    protected qtdAlimentos: number;


	constructor(nome: string, CPF: string, qtdAlimentos: number) {
        this.nome = nome;
        this.CPF = CPF;
        this.qtdAlimentos = qtdAlimentos;
    }

    // método abstrato que será subscrito em outras classes
    public abstract infoProdutor(): void;

}