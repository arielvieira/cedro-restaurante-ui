import { Prato } from './prato.model';

export class PratoDTO {
    id: number;
    nome: String;
    preco: number;
    restauranteId: number;

    constructor(prato: Prato) {
        this.id = prato.id;
        this.nome = prato.nome;
        this.preco = prato.preco;
        this.restauranteId = prato.restaurante.id;
    }
}
