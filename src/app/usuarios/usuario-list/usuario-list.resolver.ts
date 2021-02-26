import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {Injectable} from "@angular/core";
import {Usuario} from "../usuario/usuario";
import {UsuarioService} from "../usuario/usuario.service";

@Injectable( {providedIn: 'root'})
export class UsuarioListResolver implements Resolve<Observable<Usuario[]>>{
  constructor(private service: UsuarioService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Usuario[]>> | Promise<Observable<Usuario[]>> | Observable<Usuario[]> {
    return this.service.listarUsuario();
  }

}
