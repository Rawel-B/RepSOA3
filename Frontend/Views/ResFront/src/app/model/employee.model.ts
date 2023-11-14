import { Restaurant } from "./restaurant.model";

export class Employee
{
    employeeid! : number;
    employeename! : string;
    employeerole! : string;
    employeehiredate! : Date ;
    restaurant! : Restaurant;
}