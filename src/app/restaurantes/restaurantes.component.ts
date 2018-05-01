import { Component, OnInit } from '@angular/core';

import { RestaurantesService } from './restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  nome = '';
  restaurantes;

  constructor(private restaurantesService: RestaurantesService) {
    this.restaurantesService = restaurantesService;
  }

  ngOnInit() {
    this.loadRestaurantes();
  }

  loadRestaurantes() {
    this.restaurantesService.fetchRestaurantes().subscribe(data => this.restaurantes = data);
  }

  searchRestaurante() {
    this.restaurantesService.searchRestaurante(this.nome).subscribe(data => this.restaurantes = data);
  }

  removeRestaurante(id) {
    this.restaurantesService.deleteRestaurante(id).subscribe(() => this.searchRestaurante());
  }
}
