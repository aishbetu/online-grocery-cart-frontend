import { Component, OnInit } from '@angular/core';
import {SignupModel} from "../shared/signup.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: SignupModel) {
    console.log(formData);
    const { first_name, last_name, email, password } = formData;
    this.authService.signUpUser(first_name, last_name, email, password, false).subscribe((data: any) => {
      console.log("Success");
      console.log(data);

    }, (err) => {
      console.log('Error');
      console.log(err);
    });
  }

}
