import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
import {environment} from '../../../environments/environment';
import {Anuncio} from "../../anuncios/anuncio/anuncio";

@Injectable({providedIn: 'root'})
export class UsuarioService{

  constructor(private http: HttpClient) {
  }

  listarUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.api + '/usuario');
  }

  cadastrarUsuario(usuario: Usuario): Observable<void> {
    if (usuario.id) {
      return this.http.put<void>(`${environment.api}/usuario`, usuario);
    }
    return this.http.post<void>(environment.api + '/usuario', usuario);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api}/usuario/${id}`);
  }

  excluirUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/usuario/${id}`);
  }

}
