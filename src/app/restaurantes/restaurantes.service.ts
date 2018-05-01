import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantesService {

  constructor(private http: Http) { }

  fetchRestaurante(id) {
    return this.http.get('/api/restaurantes/' + id).map((response: Response) => response.json());
  }

  fetchRestaurantes() {
    return this.http.get('/api/restaurantes').map((response: Response) => response.json());
  }

  searchRestaurante(searchTerm) {
    return this.http.get('/api/restaurantes/search?nome=' + searchTerm).map((response: Response) => response.json());
  }

  createRestaurante(restaurante) {
    return this.http.post('/api/restaurantes', restaurante);
  }

  updateRestaurante(restaurante) {
    return this.http.put('/api/restaurantes/' + restaurante.id, restaurante);
  }

  deleteRestaurante(id) {
    return this.http.delete('/api/restaurantes/' + id);
  }
}
