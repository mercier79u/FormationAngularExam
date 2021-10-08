import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-smart',
  templateUrl: './restaurant-smart.component.html',
  styleUrls: ['./restaurant-smart.component.css']
})
export class RestaurantSmartComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.loadRestaurants()
    this.nbMoyenEtoileCalcul()
  }

  public loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(value => this.restaurants = value);
  }

  public nbMoyenEtoileCalcul(): void {
    this.restaurants.forEach(function (restaurant) {
      let nbEtoile: number = 0;
      let compteur: number = 0;
      if (restaurant.evaluations) {
        restaurant.evaluations.forEach(function (evaluation) {
          nbEtoile = nbEtoile + evaluation.etoiles;
          compteur++;
        })
        restaurant.noteMoyenne = nbEtoile / compteur;
      }
      else {
        restaurant.noteMoyenne=-1;
      }
    })

  }

  restaurantAdded(restaurant: Restaurant) {
    this.restaurantService.addRestaurant(restaurant)
  }
}
