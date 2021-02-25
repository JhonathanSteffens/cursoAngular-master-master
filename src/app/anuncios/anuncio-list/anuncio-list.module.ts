import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {RouterModule} from "@angular/router";
import {AnuncioListResolver} from "./anuncio-list.resolver";
import {FilterByTitlePipe} from './filter-by-title.pipe';

@NgModule({
    declarations: [
      AnuncioListComponent,
      FilterByTitlePipe],
    exports: [
        AnuncioListComponent
    ],
    imports: [
        CommonModule,
        AnunciosModule,
        RouterModule
    ]
})
export class AnuncioListModule {
}
