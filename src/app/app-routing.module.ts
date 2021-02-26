import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnuncioListResolver} from "./anuncios/anuncio-list/anuncio-list.resolver";
import {AnuncioFormComponent} from "./anuncios/anuncio-form/anuncio-form.component";
import {HomeComponent} from './home/home.component';
import {UsuarioFormComponent} from "./usuarios/usuario-form/usuario-form.component";
import {UsuarioListComponent} from "./usuarios/usuario-list/usuario-list.component";
import {UsuarioListResolver} from "./usuarios/usuario-list/usuario-list.resolver";

const routes: Routes = [
  //rotas
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'a/ud/:id', component: AnuncioFormComponent},
  {path: 'u/add', component:  UsuarioFormComponent},
  {path: 'u/ud/:id', component:  UsuarioFormComponent},
  {path: 'u/list', component:  UsuarioListComponent, resolve: {usuarios: UsuarioListResolver}},
  {path: '**', component: HomeComponent, resolve: {anuncios: AnuncioListResolver}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
