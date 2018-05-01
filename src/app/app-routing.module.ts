import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PratosComponent } from './pratos/pratos.component';
import { FormRestauranteComponent } from './restaurantes/form-restaurante/form-restaurante.component';
import { FormPratoComponent } from './pratos/form-prato/form-prato.component';

const ROUTES: Routes = [
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'restaurantes/create', component: FormRestauranteComponent },
    { path: 'restaurantes/edit/:id', component: FormRestauranteComponent },
    { path: 'pratos', component: PratosComponent },
    { path: 'pratos/create', component: FormPratoComponent },
    { path: 'pratos/edit/:id', component: FormPratoComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
