import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SignupModel} from "./shared/signup.model";
import {map} from "rxjs";
import {LoginModel} from "./shared/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:5001/api/v1/auth/';
  headers = new HttpHeaders().set('Content-type', 'applicaiton/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) { }

  signUpAdmin(first_name: string, last_name: string, email: string, password: string, is_admin: boolean) {
    const postData: SignupModel = {first_name: first_name, last_name: last_name, email: email, password: password, is_admin: is_admin};
    return this.http.post<any>(`${this.endpoint}/signup`, postData).pipe(
      map(
        (data) => {
          localStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        },
        (err) => {
          return err;
        }
      )
    );
  }

  loginAdmin(email: string, password: string) {
    const postData: LoginModel = {email: email, password: password};
    return this.http.post<any>(`${this.endpoint}/login`, postData).pipe(
      map(
        (data) => {
          if (data.is_admin == true) {
            localStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          } else {
            throw new Error('uh oh! You do not have admin access');
          }
        },
        (err) => {
          return err;
        }
      )
    );
  }

}
