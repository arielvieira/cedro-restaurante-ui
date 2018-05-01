import { Component, OnInit } from '@angular/core';

import { PratosService } from './pratos.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  constructor(private pratosService: PratosService) { }

  ngOnInit() {
  }

}
