import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { PratosService } from '../pratos.service';

import { Prato } from '../prato.model';
import { RestaurantesService } from '../../restaurantes/restaurantes.service';
import { Restaurante } from '../../restaurantes/restaurante.model';

@Component({
  selector: 'app-form-prato',
  templateUrl: './form-prato.component.html',
  styleUrls: ['./form-prato.component.css']
})
export class FormPratoComponent implements OnInit {
  prato: Prato = new Prato();
  restaurantes: Restaurante[];
  selectedRestaurante;
  pageTitle: string;
  form: FormGroup;

  constructor(
    private pratosService: PratosService,
    private restaurantesService: RestaurantesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchRestaurantes();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle = id ? 'Editar Prato' : 'Cadastro de Prato';
    if (id) {
      this.fetchData(id);
    }

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      restaurante: [null, Validators.required],
    });
  }

  fetchData(id) {
    this.pratosService.fetchPrato(id).subscribe(
      data => this.prato = data,
      err => this.navigateBackToPratos()
    );
  }

  fetchRestaurantes() {
    this.restaurantesService.fetchRestaurantes().subscribe(
      data => this.restaurantes = data,
      err => this.navigateBackToPratos()
    );
  }

  saveData() {
    console.log(this.form);
    if (this.form.invalid) {
      return console.log('invalid');
    }
    if (this.prato.id) {
      return this.pratosService
        .updatePrato(this.prato)
        .subscribe(() => this.navigateBackToPratos());
    }

    this.pratosService
      .createPrato(this.prato)
      .subscribe(() => this.navigateBackToPratos());
  }

  navigateBackToPratos() {
    this.router.navigate(['/pratos']);
  }
}
