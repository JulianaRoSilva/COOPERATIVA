// funções auxiliares

export const ask = require('readline-sync')

import { Instituicao } from "../Instituicao";
import { Produtor } from "../Produtor";
import { purple } from "./cores";

export function doacao(produtor: Produtor, instituicao: Instituicao): void {
    
}

export function stop(): void {
    ask.question(`\x1b[93mPressione ENTER para continuar...\x1b[0m`)
}