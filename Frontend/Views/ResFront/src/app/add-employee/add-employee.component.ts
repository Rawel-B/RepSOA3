import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Restaurant } from '../model/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {

  newEmployee = new Employee();
  restaurants! : Restaurant[];
  newRestaurantid! : number;
  newRestaurant! : Restaurant;

  constructor(private employeeService: EmployeeService,private router : Router) { }

  ngOnInit() : void {
    //this.restaurants = this.employeeService.listRestaurants();
    //this.employeeService.listRestaurants().subscribe(rests => {this.restaurants = rests;console.log(rests);});
    this.employeeService.listRestaurants().subscribe(rests => {console.log(rests);this.restaurants = rests._embedded.restaurants;});
  }

  addEmployee(){
    //console.log(this.newEmployee);
    /*this.newRestaurant = this.employeeService.consultRestaurant(this.newRestaurantid);
    this.newEmployee.restaurant = this.newRestaurant
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['employees']);*/
    /*this.employeeService.addEmployee(this.newEmployee).subscribe(emp => {
    console.log(emp);
    this.router.navigate(['produits']);
    });*/
    this.newEmployee.restaurant = this.restaurants.find(res => res.restaurantid == this.newRestaurantid)!;
    this.employeeService.addEmployee(this.newEmployee).subscribe(emp => {
      console.log(emp);
      this.router.navigate(['produits']);
    });
  }

}
