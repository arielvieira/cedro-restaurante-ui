import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-restaurante',
  templateUrl: './form-restaurante.component.html',
  styleUrls: ['./form-restaurante.component.css']
})
export class FormRestauranteComponent implements OnInit {
  pageTitle: string;
  restaurante = { id: null };

  constructor(private restaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.restaurantesService = restaurantesService;
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fetchData(id);
      this.pageTitle = 'Editar Restaurante';
    } else {
      this.pageTitle = 'Cadastro de Restaurante';
    }
  }

  fetchData(id) {
    this.restaurantesService.fetchRestaurante(id).subscribe(
      (data) => {
        this.restaurante = data;
      },
      (err) => this.navigateBack()
    );
  }

  navigateBack() {
    this.router.navigate(['/restaurantes']);
  }

  saveData(form: NgForm) {
    if (form.invalid) {
      return console.log('invalid');
    }
    const restaurante = { id: null, nome: form.value.nome };

    if (this.restaurante.id) {
      restaurante.id = this.restaurante.id;
      return this.restaurantesService
        .updateRestaurante(restaurante)
        .subscribe(() => this.navigateBack());
    }

    this.restaurantesService
      .createRestaurante(restaurante)
      .subscribe(() => this.navigateBack());
  }
}
