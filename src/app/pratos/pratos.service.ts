import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PratosService {

  constructor(private http: Http) { }

  fetchPrato(id) {
    return this.http.get('/api/pratos/' + id).map((response: Response) => response.json());
  }

  fetchPratos() {
    return this.http.get('/api/pratos').map((response: Response) => response.json());
  }

  createPrato(prato) {
    return this.http.post('/api/pratos', prato);
  }

  updatePrato(prato) {
    return this.http.put('/api/pratos/' + prato.id, prato);
  }

  deletePrato(id) {
    return this.http.delete('/api/pratos/' + id);
  }
}
