import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from './navbar/navbar.module';
import {VmessageModule} from './vmessage/vmessage.module';
import {HomeModule} from './home/home.module';
import {AnunciosModule} from './anuncios/anuncios.module';
import {AnuncioListModule} from "./anuncios/anuncio-list/anuncio-list.module";
import {UsuarioFormModule} from "./usuarios/usuario-form/usuario-form.module";
import {UsuarioListModule} from "./usuarios/usuario-list/usuario-list.module";


// Faz a declaração e exportação do componente e importa outros componentes que ele vai utilizar
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    VmessageModule,
    NavbarModule,
    HomeModule,
    AnuncioListModule,
    UsuarioFormModule,
    UsuarioListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
