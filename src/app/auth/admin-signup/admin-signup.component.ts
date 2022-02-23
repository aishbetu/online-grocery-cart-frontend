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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: SignupModel){
    console.log(formData);
    const { first_name, last_name, email, password } = formData;
    this.authService.signUpAdmin( first_name, last_name, email, password, true).subscribe((data: any) => {
      console.log("Success");
      console.log(data);

    }, (err) => {
      console.log('Error');
      console.log(err);
    });
  }

}
