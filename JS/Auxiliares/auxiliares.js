"use strict";
// funções auxiliares
Object.defineProperty(exports, "__esModule", { value: true });
exports.ask = void 0;
exports.doacao = doacao;
exports.stop = stop;
exports.ask = require('readline-sync');
function doacao(produtor, instituicao) {
}
function stop() {
    exports.ask.question(`\x1b[93mPressione ENTER para continuar...\x1b[0m`);
}
