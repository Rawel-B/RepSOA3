import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchByRestaurantComponent } from './search-by-restaurant/search-by-restaurant.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeeGuard } from './employee.guard';

const routes: Routes = [
  {path: "employees", component : EmployeesComponent},
  {path: "add-employee", component : AddEmployeeComponent, canActivate:[EmployeeGuard]},
  {path: "updateEmployee/:id", component: UpdateEmployeeComponent},
  {path: "searchByRestaurant", component : SearchByRestaurantComponent},
  {path: "searchByName", component : SearchByNameComponent},
  {path: "", redirectTo: "employees", pathMatch: "full" },
  {path: "listRestaurants", component : ListRestaurantsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
