import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioComponent} from './anuncio.component';

@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule
  ],
  exports: [ AnuncioComponent ]
})
export class AnuncioModule{

}
