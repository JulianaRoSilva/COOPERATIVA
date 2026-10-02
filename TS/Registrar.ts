
import { green, purple, red } from "./Auxiliares/cores";
import { Nomeada } from "./Interfaces/Nomeada";

// Classe para controlar as listas de instituições, 
export class Registrar<T extends Nomeada> {

    private lista: T[] = [];

    public add(item: T): void {
        this.lista.push(item);
    }

    public listar(): void {

        if (this.lista.length = 0) {

            for (let i = 0; i < this.lista.length; i++) {
                green(`- ${this.lista[i].getNome()}`);
            }

        } else {
            red(`Sem nenhum cadastro ainda nessa categoria.`);
        }
    }

    public buscar(busca: string): void {

        const item = this.lista.find(item => item.getNome() === busca);

        if (item !== undefined) {
            green(`${item.getNome()} já cadastrado no sistema`);
        } else {
            red(`Produto não encontrado.`);
        }
    }
}