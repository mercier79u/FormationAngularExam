import { Injectable } from '@angular/core';
import {Restaurant} from "../models/restaurant";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);
  restaurantsList:Restaurant[];
  public restaurant:Restaurant;
  constructor(private httpClient: HttpClient) {
    this.loadRestaurants()
  }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.restaurants;
  }

  public loadRestaurants(): void {
    this.httpClient.get<Restaurant[]>('http://localhost:3000/restaurants').subscribe(value => this.restaurants.next(value));
  }

  public addRestaurant(restaurant: Restaurant) {
    this.httpClient.post<number>("http://localhost:3000/restaurants",restaurant).subscribe(value => this.restaurants.next([...this.restaurants.getValue(), restaurant]))
  }

  getRestaurant(id: string) {
    this.restaurantsList= <Restaurant[]>this.restaurants

    this.restaurant = this.restaurantsList
      .filter((restaurant: Restaurant) => restaurant.id === id);
  }
}
