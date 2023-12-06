import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-search-by-restaurant',
  templateUrl: './search-by-restaurant.component.html',
  styles: [
  ]
})
export class SearchByRestaurantComponent implements OnInit {

  restaurants !: Restaurant[];
  restaurantid!: number;
  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listRestaurants().
      subscribe(rests => {
        this.restaurants = rests._embedded.restaurants;
        console.log(rests);
        console.log(this.restaurants)
      });


      this.employeeService.searchByRestaurant(1).subscribe((emps) => {
       console.log(emps);
       });
  }

  onChange() {
    this.employeeService.searchByRestaurant(this.restaurantid).subscribe((emps) => {
      //this.restaurants = emps 
      console.log(emps);
      this.employees=emps;
      
      });
  }

}
