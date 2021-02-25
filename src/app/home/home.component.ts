import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() filter: string;
  constructor() { }

  ngOnInit(): void {
  }

  receberFilter(event: string): void {
    this.filter = event;
  }
}
