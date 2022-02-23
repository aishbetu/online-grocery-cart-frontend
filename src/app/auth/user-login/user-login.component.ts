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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: LoginModel) {
    console.log(formData);
    const { email, password } = formData;
    this.authService.loginUser(email, password).subscribe((data) => {
      console.log("Success login");
      console.log(data);
    }, (err) => {
      console.log("error aya hai");
      console.log(err);
    })
  }

}
