import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatTableModule,
  MatGridListModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormField,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { FormRestauranteComponent } from './restaurantes/form-restaurante/form-restaurante.component';
import { PratosComponent } from './pratos/pratos.component';

// Services
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { PratosService } from './pratos/pratos.service';
import { FormPratoComponent } from './pratos/form-prato/form-prato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    PratosComponent,
    FormRestauranteComponent,
    FormPratoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [RestaurantesService, PratosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
