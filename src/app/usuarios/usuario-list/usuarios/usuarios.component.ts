import {Component, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../usuario/usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  @Input() usuarios: Usuario[] = [];
  @Input() filter: string;
  constructor() { }

  ngOnInit(): void {
  }

  receberFilter(event: string) {
    this.filter = event;
  }
}
