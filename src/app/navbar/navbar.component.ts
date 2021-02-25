import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Output() filterOutput = new EventEmitter<string>();
  filter = '';
  filterSub: any;
  constructor() { }

  ngOnInit(): void {
  }

  onKey($event: KeyboardEvent): void {
    this.filter = ($event.target as HTMLInputElement).value;
    this.filterOutput.emit(this.filter);
  }
}
