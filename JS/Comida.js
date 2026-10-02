"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comida = void 0;
class Comida {
    nome;
    categoria;
    qtdDisponivel;
    prodResponsavel;
    constructor(n, c, q, p) {
        this.nome = n;
        this.categoria = c;
        this.qtdDisponivel = q;
        this.prodResponsavel = p;
    }
    getNome() {
        return this.nome;
    }
    getcCategoria() {
        return this.categoria;
    }
    getQtdDisponivel() {
        return this.qtdDisponivel;
    }
    getProdResponsavel() {
        return this.prodResponsavel;
    }
    // Método serve para colocar qtd ou tirar qtd 
    // Se ao receber um num negativo, - + da -
    setQtd(val) {
        this.qtdDisponivel += val;
    }
}
exports.Comida = Comida;
