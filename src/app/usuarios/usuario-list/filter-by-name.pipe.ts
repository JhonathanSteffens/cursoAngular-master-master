import {Pipe, PipeTransform} from '@angular/core';
import {Usuario} from '../usuario/usuario';

@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {
  transform(usuarios: Usuario[], name: string): Usuario[] {
    if (name) {
      name = name.trim().toUpperCase();
      return usuarios.filter((usuario) => usuario.nome.toUpperCase().includes(name));
    }
    return usuarios;
  }
}
