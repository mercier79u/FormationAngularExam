import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurant} from "../../models/restaurant";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  elemId:string="";
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }
  public restaurant: Restaurant;
  ngOnInit(): void {
    this.route.params.subscribe( (params:Params)=> {
      this.elemId=params['id'];
      this.restaurant=this.restaurantService.getRestaurant(this.elemId)
    })['id'];
  }

}
