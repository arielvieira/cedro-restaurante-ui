import { Restaurante } from '../restaurantes/restaurante.model';

export class Prato {
    id: number;
    nome: String;
    restaurante: Restaurante;

    constructor() {
        this.restaurante = new Restaurante();
    }
}
