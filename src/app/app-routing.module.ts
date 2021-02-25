import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioListResolver} from "./anuncios/anuncio-list/anuncio-list.resolver";
import {AnuncioFormComponent} from "./anuncios/anuncio-form/anuncio-form.component";
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  //rotas
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'a/ud/:id', component: AnuncioFormComponent},
  {path: 'u/add', component:  AnuncioFormComponent},
  {path: 'u/ud/:id', component:  AnuncioFormComponent},
  {path: 'u/list', component:  AnuncioFormComponent},
  {path: '**', component: HomeComponent, resolve: {anuncios: AnuncioListResolver}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
