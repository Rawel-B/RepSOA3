import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styles: [
  ]
})
export class SearchByNameComponent implements OnInit {

  Employeename: string="";
  employees! : Employee[];
  allEmployees! : Employee[];
  searchTerm! : string;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listEmployees().subscribe(emps => {console.log(emps);this.allEmployees=emps});
  }

  searchEmps(){
    this.employeeService.searchEmps(this.Employeename).subscribe(emps => {console.log(emps);this.employees=emps});
  }

  onKeyUp(filterText : string){
    this.employees = this.allEmployees.filter(item => item.employeename.toLowerCase().includes(filterText));
  }
    
}
