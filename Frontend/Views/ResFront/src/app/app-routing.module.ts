import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchByRestaurantComponent } from './search-by-restaurant/search-by-restaurant.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {path: "employees", component : EmployeesComponent},
  {path: "add-employee", component : AddEmployeeComponent},
  {path: "updateEmployee/:id", component: UpdateEmployeeComponent},
  {path: "", redirectTo: "employees", pathMatch: "full" },
  {path: "searchByRestaurant", component : SearchByRestaurantComponent}
  {path: "searchByName", component : SearchByNameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
