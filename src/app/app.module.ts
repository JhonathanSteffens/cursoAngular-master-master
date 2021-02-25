import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnuncioModule} from './anuncios/anuncio/anuncio.module';
import {AnunciosModule} from './anuncios/anuncio-list/anuncios/anuncios.module';
import {AnuncioListModule} from './anuncios/anuncio-list/anuncio-list.module';
import {AnuncioFormModule} from "./anuncios/anuncio-form/anuncio-form.component.module";
import {VmessageModule} from "./vmessage/vmessage.module";
import { HomeComponent } from './home/home.component';
import {NavbarModule} from './navbar/navbar.module';

// Faz a declaração e exportação do componente e importa outros componentes que ele vai utilizar
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnuncioModule,
    AnunciosModule,
    AnuncioListModule,
    AnuncioFormModule,
    VmessageModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
