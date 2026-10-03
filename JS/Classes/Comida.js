"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comida = void 0;
class Comida {
    nome;
    categoria;
    constructor(n, c) {
        this.nome = n;
        this.categoria = c;
    }
    getNome() {
        return this.nome;
    }
    getCategoria() {
        return this.categoria;
    }
}
exports.Comida = Comida;
