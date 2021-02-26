import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {RouterModule} from '@angular/router';
import {FilterByTitlePipe} from './filter-by-title.pipe';
import {AnunciosComponent} from './anuncios/anuncios.component';
import {AnuncioModule} from '../anuncio/anuncio.module';

@NgModule({
    declarations: [
      AnuncioListComponent,
      FilterByTitlePipe,
      AnunciosComponent
      ],
    exports: [
        AnuncioListComponent
    ],
    imports: [
        CommonModule,
        AnuncioModule,
        RouterModule
    ]
})
export class AnuncioListModule {
}
