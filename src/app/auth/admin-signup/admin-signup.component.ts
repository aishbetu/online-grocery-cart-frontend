import { Component, OnInit } from '@angular/core';
import {SignupModel} from "../shared/signup.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  isError = false;
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: SignupModel){
    console.log(formData);
    const { first_name, last_name, email, password } = formData;
    this.authService.signUpAdmin( first_name, last_name, email, password, true).subscribe((data: any) => {
      console.log("Success");
      console.log(data);
      this.router.navigate(['/products-management/']);
    }, (err) => {
      console.log(err);
      this.isError = true;
      this.error = err.error.message;
      setTimeout(() => {
        this.isError = false;
        this.error = '';
      },2000);
    });
  }

}
