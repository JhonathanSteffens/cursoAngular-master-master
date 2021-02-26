import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: Usuario = new Usuario();
  cadastro: boolean;

  constructor(   private formBuilder: FormBuilder,
                 private usuarioService: UsuarioService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioForm =this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.minLength(6), Validators.required]]
    });
    const id = this.activatedRoute.snapshot.params.id;
    if(id) {
      this.cadastro = true;
      this.usuarioService.buscarPorId(id).subscribe(usuario => {
        this.usuario = usuario;
        this.usuarioForm.patchValue({
          nome: this.usuario.nome,
          email: this.usuario.email,
          senha: this.usuario.senha
        });
      })
    }
  }

  salvarUsuario(): void{
    this.usuario.nome = this.usuarioForm.get('nome')?.value;
    this.usuario.email = this.usuarioForm.get('email')?.value;
    this.usuario.senha = this.usuarioForm.get('senha')?.value;
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['u/list']);
    });
  }

  deletarUsuario(): void{
    this.usuarioService.excluirUsuario(this.usuario.id).subscribe( () => {
      this.router.navigate(['u/list']);
    })
  }

}
