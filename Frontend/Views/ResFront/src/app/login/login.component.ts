import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user = new User();
  error=0;

  constructor(private authService : AuthService,
    private router: Router){ }

  ngOnInit(): void {
  }

  onLoggedin()
  {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Wrong Username Or Password !');
      this.error = 1;
  }

}
