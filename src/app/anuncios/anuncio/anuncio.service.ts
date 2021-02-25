import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Anuncio} from "./anuncio";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AnuncioService {
  constructor(private http: HttpClient) {
  }

  listar(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(environment.api + '/anuncios');
  }

  cadastrar(anuncio: Anuncio): Observable<void> {
    if (anuncio.id) {
      return this.http.put<void>(`${environment.api}/anuncios/${anuncio.id}`, anuncio);
    }
    return this.http.post<void>(environment.api + '/anuncios', anuncio);
  }

  buscarPorId(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(`${environment.api}/anuncios/${id}`);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/anuncios/${id}`);
  }
}
