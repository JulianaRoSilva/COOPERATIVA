
import { Registrar } from "./Classes/Registrar";
import { Comida } from "./Classes/Comida";

let comidas = new Registrar<Comida>();

comidas.add(new Comida('Arroz', 'Grão'));
comidas.add(new Comida('Feijão', 'Grão'));
comidas.add(new Comida('Açucar', 'Grão'));

comidas.listar();