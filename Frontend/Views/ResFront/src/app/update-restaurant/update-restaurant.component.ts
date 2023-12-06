import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styles: [
  ]
})
export class UpdateRestaurantComponent implements OnInit {

  @Input()
  restaurant! : Restaurant;
  @Output()
  restaurantUpdated = new EventEmitter<Restaurant>();
  @Input()
  add! : boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit For UpdateRestaurant Component",this.restaurant);
  }

  saveRestaurant(){
    this.restaurantUpdated.emit(this.restaurant);
  }
    
}
