"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registrar = void 0;
const cores_1 = require("./Auxiliares/cores");
// Classe para controlar as listas de instituições, 
class Registrar {
    lista = [];
    add(item) {
        this.lista.push(item);
    }
    listar() {
        if (this.lista.length = 0) {
            for (let i = 0; i < this.lista.length; i++) {
                (0, cores_1.green)(`- ${this.lista[i].getNome()}`);
            }
        }
        else {
            (0, cores_1.red)(`Sem nenhum cadastro ainda nessa categoria.`);
        }
    }
    buscar(busca) {
        const item = this.lista.find(item => item.getNome() === busca);
        if (item !== undefined) {
            (0, cores_1.green)(`${item.getNome()} já cadastrado no sistema`);
        }
        else {
            (0, cores_1.red)(`Produto não encontrado.`);
        }
    }
}
exports.Registrar = Registrar;
