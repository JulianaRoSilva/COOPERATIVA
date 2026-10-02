"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtor = void 0;
class Produtor {
    nome;
    CPF;
    qtdDisponivelDoacao;
    constructor(nome, CPF, qtdAlimentos, c) {
        this.nome = nome;
        this.CPF = CPF;
        this.qtdDisponivelDoacao = qtdAlimentos;
    }
    getQtdDisponivel() {
        return this.qtdDisponivelDoacao;
    }
    getNome() {
        return this.nome;
    }
    getCPF() {
        return this.CPF;
    }
    // método que deve ser implementado pela interface
    // USAR TRY CATCH PARA VERIFICAR SE A DOAÇÃO SERÁ EFETIVA!
    doar(qtd, instituicao, comida) {
        if (qtd > this.qtdDisponivelDoacao) {
            throw new Error('Erro: Não é possível doar mais do que a quantidade disponível pelo produtor');
        }
        this.qtdDisponivelDoacao -= qtd;
        console.log(`Doação realizada: ${qtd} KG de ${comida.getNome()} para a instituição ${instituicao.getNome().toUpperCase()}`);
    }
}
exports.Produtor = Produtor;
