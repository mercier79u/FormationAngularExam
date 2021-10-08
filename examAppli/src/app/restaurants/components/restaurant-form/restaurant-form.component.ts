import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Restaurant} from "../../models/restaurant";
import {Evaluation} from "../../models/evaluation";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  public restaurant: Restaurant = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: [],
    noteMoyenne: 0,
  };

  constructor() {
  }

  @ViewChild('form', {static: true}) form?: NgForm;
  @Output() restaurantAdded = new EventEmitter<Restaurant>();

  ngOnInit(): void {
  }

  submit() {
    if (this.form && this.form.valid) {
      this.restaurantAdded.emit(this.restaurant);
      this.restaurant = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: [],
        noteMoyenne: 0,
      };
    }
  }
}
