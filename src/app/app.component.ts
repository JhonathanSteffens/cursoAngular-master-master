import {Component} from '@angular/core';

//  Os componentes são classes escritas em TypeScript que recebem o decorator @Component
@Component({
  // o nome do componente Para todo o componente existe um elemento único associado que permite que ele seja adicionado em um documento HTML.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'loja';
}
