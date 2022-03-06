import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {LoginModel} from "../shared/login.model";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isError = false;
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: LoginModel) {
    console.log(formData);
    const { email, password } = formData;
    this.authService.loginUser(email, password).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/products/']);
    }, (err) => {
      console.log(err);
      this.isError = true;
      if (err.error) {
        // handle server error
        this.error = err.error.message;
      } else {
        // handle service error
        this.error = err;
      }
      setTimeout(() => {
        this.isError = false;
        this.error = '';
      },2000);
    })
  }

}
