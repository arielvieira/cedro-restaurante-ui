import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Prato } from './prato.model';
import { PratoDTO } from './prato.dto';

@Injectable()
export class PratosService {

  constructor(private http: Http) { }

  fetchPrato(id: number) {
    return this.http.get('/api/pratos/' + id).map((response: Response) => response.json());
  }

  fetchPratos() {
    return this.http.get('/api/pratos').map((response: Response) => response.json());
  }

  createPrato(prato: Prato) {
    return this.http.post('/api/pratos', prato);
  }

  updatePrato(prato: Prato) {
    const pratoDto = new PratoDTO(prato);
    return this.http.put('/api/pratos/' + pratoDto.id, pratoDto);
  }

  deletePrato(id: number) {
    return this.http.delete('/api/pratos/' + id);
  }
}
