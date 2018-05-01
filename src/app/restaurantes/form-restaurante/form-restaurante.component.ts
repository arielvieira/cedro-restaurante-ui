import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { RestaurantesService } from '../restaurantes.service';

import { Restaurante } from '../restaurante.model';

@Component({
  selector: 'app-form-restaurante',
  templateUrl: './form-restaurante.component.html',
  styleUrls: ['./form-restaurante.component.css']
})
export class FormRestauranteComponent implements OnInit {
  pageTitle: string;
  restaurante: Restaurante = new Restaurante();

  constructor(
    private restaurantesService: RestaurantesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle = id ? 'Editar Restaurante' : 'Cadastro de Restaurante';
    if (id) {
      this.fetchData(id);
    }
  }

  fetchData(id) {
    this.restaurantesService.fetchRestaurante(id).subscribe(
      (data) => {
        this.restaurante = data;
      },
      (err) => this.navigateBackToRestaurante()
    );
  }

  saveData(form: NgForm) {
    if (form.invalid) {
      return console.log('invalid');
    }
    if (this.restaurante.id) {
      return this.restaurantesService
        .updateRestaurante(this.restaurante)
        .subscribe(() => this.navigateBackToRestaurante());
    }

    this.restaurantesService
      .createRestaurante(this.restaurante)
      .subscribe(() => this.navigateBackToRestaurante());
  }

  navigateBackToRestaurante() {
    this.router.navigate(['/restaurantes']);
  }
}
