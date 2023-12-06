import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styles: [
  ]
})
export class ListRestaurantsComponent implements OnInit {

  restaurants! : Restaurant[];
  updatedRes:Restaurant = {"restaurantid":0,"restaurantname":"","restaurantaddress":"","restaurantphone":"","restaurantemail":"","restaurantwebsite":""};
  add : boolean=true;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  this.employeeService.listRestaurants().
  subscribe(res => {this.restaurants = res._embedded.restaurants;
  console.log(res);
  });}
  
  restaurantUpdated(res:Restaurant){
    console.log("Res updated event",res);
    this.employeeService.addRestaurant(res).
    subscribe( ()=> this.loadRestaurants());
  }

  loadRestaurants(){
    this.employeeService.listRestaurants().
    subscribe(rests => {this.restaurants = rests._embedded.restaurants;
    console.log(rests);
    });
  }

  updateRes(res:Restaurant) {
    this.updatedRes=res;
    this.add=false; 
  }

}
