import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../usuario/usuario";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  @Input() filter: string;
  usuarios: Usuario[];
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarios = this.activatedRouter.snapshot.data['usuarios'];
  }

}
