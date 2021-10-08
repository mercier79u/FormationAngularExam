import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  constructor() { }
  @Input() restaurants: Restaurant[] = [];
  ngOnInit(): void {
  }

}
