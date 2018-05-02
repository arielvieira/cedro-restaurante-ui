import { Component, OnInit } from '@angular/core';

import { PratosService } from './pratos.service';

import { Prato } from './prato.model';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  pratos: Prato[];
  columnsToDisplay = ['edit', 'delete', 'restaurante', 'prato', 'preco'];
  constructor(private pratosService: PratosService) { }

  ngOnInit() {
    this.loadPratos();
  }

  loadPratos() {
    this.pratosService
      .fetchPratos()
      .subscribe(data => this.pratos = data);
  }

  removePrato(id) {
    this.pratosService
      .deletePrato(id)
      .subscribe(() => this.loadPratos());
  }
}
