"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instituicao = void 0;
class Instituicao {
    nome;
    endereco;
    pessoasAtendidas;
    constructor(n, e, p) {
        this.nome = n;
        this.endereco = e;
        this.pessoasAtendidas = p;
    }
    getNome() {
        return this.nome;
    }
    getEndereco() {
        return this.endereco;
    }
}
exports.Instituicao = Instituicao;
