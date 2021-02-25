import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {AnuncioService} from "../anuncio/anuncio.service";
import {Anuncio} from "../anuncio/anuncio";

@Component({
  selector: 'app-anuncio-form',
  templateUrl: 'anuncio-form.component.html',
  styleUrls: [ 'anuncio-form.component.scss']
})
export class AnuncioFormComponent implements OnInit{
  anuncioForm: FormGroup;
  anuncio: Anuncio = new Anuncio();
  url: string;
  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.anuncioForm = this.formBuilder.group({
      url: ['', [Validators.minLength(10), Validators.required]],
      titulo: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      mensagem: ['', [Validators.minLength(3), Validators.maxLength(300), Validators.required]]
    });
    const id = this.activatedRoute.snapshot.params.id;
    if(id) {
      this.anuncioService.buscarPorId(id).subscribe(anuncio => {
        this.anuncio = anuncio;
        this.anuncioForm.patchValue({
          url: this.anuncio.urlImagem,
          titulo: this.anuncio.titulo,
          mensagem: this.anuncio.mensagem
        });
        // Outra maneira de realizar o set dos anúncios;
        // this.anuncioForm.controls['url'].setValue(this.anuncio.urlImagem);
        // this.anuncioForm.controls['titulo'].setValue(this.anuncio.titulo);
        // this.anuncioForm.controls['mensagem'].setValue(this.anuncio.mensagem);
      });
    }
  }

  salvarAnuncio(): void{
    this.anuncio.titulo = this.anuncioForm.get('titulo')?.value;
    this.anuncio.mensagem = this.anuncioForm.get('mensagem')?.value;
    this.anuncio.urlImagem = this.anuncioForm.get('url')?.value;
    this.anuncioService.cadastrar(this.anuncio).subscribe(() => {
      this.router.navigate(['list/a']);
    });
  }
  deletarAnuncio(): void{
    this.anuncioService.deletar(this.anuncio.id).subscribe(() => {
      this.router.navigate(['list/a']);
    });
  }

}
