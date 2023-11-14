import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [
  ]
})
export class UpdateEmployeeComponent implements OnInit {

  currentEmployee = new Employee();
  restaurants! : Restaurant[];
  updatedRestaurantid! : number

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeeService: EmployeeService) { }

  ngOnInit() : void{
    //console.log(this.activatedRoute.snapshot.params['id']);
    /*this.restaurants = this.employeeService.listRestaurants();
    this.currentEmployee = this.employeeService.consultEmployee(this.activatedRoute.snapshot.params['id']);
    this.updatedRestaurantid = this.currentEmployee.restaurant.restaurantid;*/
    //console.log(this.currentEmployee);
    //this.employeeService.consultEmployee(this.activatedRoute.snapshot.params['id']).subscribe( emp =>{ this.currentEmployee = emp; } ) ;
    /*this.employeeService.listRestaurants().subscribe(rests => {this.restaurants = rests;console.log(rests);});
    this.employeeService.consultEmployee(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentEmployee = prod;this.updatedRestaurantid=this.currentEmployee.restaurant.restaurantid;}) ;*/
    this.employeeService.listRestaurants().subscribe(rests => {console.log(rests);this.restaurants = rests._embedded.restaurants;});
    this.employeeService.consultEmployee(this.activatedRoute.snapshot.params['id']).subscribe( emp =>{ this.currentEmployee = emp;this.updatedRestaurantid = this.currentEmployee.restaurant.restaurantid;});
  }

  updateEmployee() {
    /*this.currentEmployee.restaurant = this.employeeService.consultRestaurant(this.updatedRestaurantid);
    //console.log(this.currentEmployee);
    this.employeeService.updateEmployee(this.currentEmployee);
    this.router.navigate(['employees']);*/
    //this.employeeService.updateEmployee(this.currentEmployee).subscribe(emp => {this.router.navigate(['employees']); });
    this.currentEmployee.restaurant = this.restaurants.find(res => res.restaurantid == this.updatedRestaurantid)!;
    this.employeeService.updateEmployee(this.currentEmployee).subscribe(emp => {
    this.router.navigate(['employees']); }
    );
  }

}
