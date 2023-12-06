import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchByRestaurantComponent } from './search-by-restaurant/search-by-restaurant.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SearchByRestaurantComponent,
    SearchByNameComponent,
    SearchFilterPipe,
    ListRestaurantsComponent,
    UpdateRestaurantComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
