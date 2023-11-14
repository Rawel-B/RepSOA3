import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Restaurant } from '../model/restaurant.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantWrapper } from '../model/restaurantWrapped.model';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL : string = "http://localhost:8080/employees/api"
  apiURLRes : string = "http://localhost:8080/employees/res"
  //employees : Employee[];
  //restaurants : Restaurant[];

  constructor(private http : HttpClient) { 
   /* this.restaurants = 
    [
      {restaurantid : 1, restaurantname : "McDonald's"},
      {restaurantid : 2, restaurantname : "Wendy's"}
    ]
    this.employees = 
    [
      {employeeid : 1,employeename : "Howard",employeerole : "Server",employeehiredate : new Date("01/14/2015"),restaurant : {restaurantid : 1, restaurantname : "McDonald's"}},
      {employeeid : 2,employeename : "Chris",employeerole : "Manager",employeehiredate : new Date("06/14/2023"),restaurant : {restaurantid : 2, restaurantname : "Wendy's"}},
      {employeeid : 3,employeename : "Luis",employeerole : "Chef",employeehiredate : new Date("01/18/2018"),restaurant : {restaurantid : 2, restaurantname : "Wendy's"}}
    ];*/
    
  }

  listEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
    //return this.employees;
    }

  addEmployee(emp: Employee):Observable<Employee>{
    //this.employees.push(emp);
    return this.http.post<Employee>(this.apiURL,emp,httpOptions);
  }

  deleteEmployee(id : number){
    /*const index = this.employees.indexOf(emp, 0);
    if (index > -1) {
    this.employees.splice(index, 1);
    }
    //or
    /* this.employees.forEach((cur, index) => {
    if(emp.employeeid === cur.employeeid) {
    this.employees.splice(index, 1);
    }
    }); */
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultEmployee(id : number) : Observable<Employee>{
    //return this.employees.find(e => e.employeeid == id)!;
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Employee>(url);
  }

  /*sortEmployees(){
    this.employees = this.employees.sort((n1,n2) => {
    if (n1.employeeid! > n2.employeeid!) {
      return 1;
    }
    if (n1.employeeid! < n2.employeeid!) {
      return -1;
    }
      return 0;
    });
  }*/
            
  updateEmployee(emp : Employee) : Observable<Employee>{
    // console.log(p);
    /*this.deleteEmployee(e);
    this.addEmployee(e);
    this.sortEmployees();*/
    return this.http.put<Employee>(this.apiURL,emp,httpOptions);
  }
  
  listRestaurants() : Observable<RestaurantWrapper>{
    //return this.restaurants;
    //return this.http.get<Restaurant[]>(this.apiURL+"/res");
    return this.http.get<RestaurantWrapper>(this.apiURLRes);
  }
  
  searchByRestaurant(restaurantid : number):Observable<Restaurant[]>{
    const url = `${this.apiURL}/empsres/${restaurantid}`;
    return this.http.get<Restaurant[]>(url);
  }

  /*consultRestaurant(id:number): Restaurant{
    return this.restaurants.find(res => res.restaurantid == id)!;
  }*/
}
