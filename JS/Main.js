"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Registrar_1 = require("./Classes/Registrar");
const Comida_1 = require("./Classes/Comida");
let comidas = new Registrar_1.Registrar();
comidas.add(new Comida_1.Comida('Arroz', 'Grão'));
comidas.add(new Comida_1.Comida('Feijão', 'Grão'));
comidas.add(new Comida_1.Comida('Açucar', 'Grão'));
comidas.listar();
