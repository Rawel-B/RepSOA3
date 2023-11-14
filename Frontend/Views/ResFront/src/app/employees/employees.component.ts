import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

    employees? : Employee[];

  constructor(private employeeService: EmployeeService) {
   //this.employees=[];
     }

  ngOnInit(): void {
    this.loadEmployees();
    //this.employees = this.employeeService.listEmployees();
    this.employeeService.listEmployees().subscribe(emps => {
      console.log(emps);
      this.employees = emps;
    });
  }

  loadEmployees(){
    this.employeeService.listEmployees().subscribe(emps => {
    console.log(emps);
    this.employees = emps;
    });
  }

  deleteEmployee(e : Employee){
     // console.log(p);
      /*let conf = confirm("Confirm Action ?");
      if (conf)
        this.employeeService.deleteEmployee(e);*/
    let conf = confirm("Confirm Action ?");
    if (conf)
      this.employeeService.deleteEmployee(e.employeeid).subscribe(() => {
      console.log("Employee Removed .");
      //this.loadEmployees();
      
    }); 
  } 

}
