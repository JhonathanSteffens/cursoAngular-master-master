import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.scss']
})
export class VmessageComponent implements OnInit {
  //pega a variável para o pai poder modificar
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
