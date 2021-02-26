import {NgModule} from '@angular/core';
import {UsuarioFormComponent} from './usuario-form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NavbarModule} from "../../navbar/navbar.module";
import {VmessageModule} from "../../vmessage/vmessage.module";

@NgModule({
  declarations: [ UsuarioFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule,
    VmessageModule
  ]
})

export class UsuarioFormModule {
}
