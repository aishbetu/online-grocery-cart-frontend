import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../shared/login.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: LoginModel){
    console.log(formData);
    const { email, password } = formData;
    this.authService.loginAdmin(email, password).subscribe((data) => {
      console.log("Success login");
      console.log(data);
    }, (err) => {
      console.log("error aya hai");
      console.log(err);
    });
  }

}
