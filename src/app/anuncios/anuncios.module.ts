import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AnuncioModule} from './anuncio/anuncio.module';
import {AnuncioFormModule} from './anuncio-form/anuncio-form.component.module';
import {AnuncioListModule} from './anuncio-list/anuncio-list.module';



@NgModule({
  imports: [
    CommonModule,
    AnuncioModule,
    AnuncioListModule,
    AnuncioFormModule,
    HttpClientModule
  ]
})

export class AnunciosModule {
}
