import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AnuncioModule} from "../../anuncios/anuncio/anuncio.module";
import {RouterModule} from "@angular/router";
import {UsuarioListComponent} from "./usuario-list.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {UsuarioModule} from "../usuario/usuario.module";
import {NavbarModule} from "../../navbar/navbar.module";
import {FilterByNamePipe} from "./filter-by-name.pipe";

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuariosComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioModule,
    NavbarModule
  ],
  exports: [
    UsuarioListComponent
  ]
})

export class UsuarioListModule{}
