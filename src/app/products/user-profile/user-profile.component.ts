import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  isUpdateBtnClick= false;
  isSuccess = false;
  isReject = false;
  response;

  first_name;
  last_name;
  email;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.authService.getProfile().subscribe((user) => {
      console.log(user);
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;
    }, (err) => {
      console.log(err);
    })
  }


  onClickUpdatePassword() {
    this.isUpdateBtnClick = true;
  }

  cancelPassword() {
    this.isUpdateBtnClick = false;
  }

  onSubmitNewPassword(passwords) {
    console.log(passwords);
    const passwordObj = {
      "old_password": passwords.oldPassword,
      "password": passwords.newPassword
    }
    this.authService.updatePassword(passwordObj).subscribe((data) => {
      console.log(data);
      this.isUpdateBtnClick = false;
      this.isSuccess = true;
      this.response = data['message'];
      setTimeout(() => {
        this.isSuccess = false;
        this.response = '';
      },2000);
    }, (err) => {
      console.log(err);
      this.isReject = true;
      this.response = err.error.message;
      setTimeout(() => {
        this.isReject = false;
        this.response = '';
      },2000);
    });

  }

}
