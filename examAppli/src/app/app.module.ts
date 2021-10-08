import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantFormComponent } from './restaurants/components/restaurant-form/restaurant-form.component';
import { RestaurantTableComponent } from './restaurants/components/restaurant-table/restaurant-table.component';
import { RestaurantSmartComponent } from './restaurants/pages/restaurant-smart/restaurant-smart.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {monEtoileDirective} from "./restaurants/components/Directives/monEtoile.directive";
import {FormsModule} from "@angular/forms";
import {RouterModule, ROUTES, Routes} from "@angular/router";
import { RestaurantDetailComponent } from './restaurants/pages/restaurant-detail/restaurant-detail.component';


const appRoutes: Routes = [
  { path: '/detailRestaurant/:id', component: RestaurantDetailComponent },
  { path: '', component: RestaurantSmartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantTableComponent,
    RestaurantSmartComponent,
    monEtoileDirective,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
