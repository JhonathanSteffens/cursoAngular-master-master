import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomeComponent} from './home.component';
import {AnuncioListModule} from '../anuncios/anuncio-list/anuncio-list.module';
import {NavbarModule} from '../navbar/navbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AnuncioListModule,
    NavbarModule
  ]
})

export class HomeModule{
}
