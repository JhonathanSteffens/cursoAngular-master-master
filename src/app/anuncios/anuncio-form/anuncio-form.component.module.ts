import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AnuncioFormComponent} from './anuncio-form.component';
import {VmessageModule} from '../../vmessage/vmessage.module';
import {NavbarModule} from "../../navbar/navbar.module";

@NgModule({
  declarations: [ AnuncioFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    NavbarModule
  ]
})

export class AnuncioFormModule {
}
