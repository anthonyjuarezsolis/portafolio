import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
anios: number = new Date().getFullYear();
month: number = new Date().getMonth();
day: number = new Date().getDate();
  constructor() { }

  ngOnInit() {
  }

}
