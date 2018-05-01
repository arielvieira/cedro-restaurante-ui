import { Component, OnInit } from '@angular/core';

import { PratosService } from './pratos.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  pratos = [];

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
