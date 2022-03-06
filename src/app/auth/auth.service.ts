import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SignupModel} from "./shared/signup.model";
import {map, of} from "rxjs";
import {LoginModel} from "./shared/login.model";
import {UserModel} from "./shared/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:5001/api/v1/auth';
  headers = new HttpHeaders().set('Content-type', 'applicaiton/json');
  currentUser = {};
  isLogin = false;
  roleAs: string;
  constructor(private http: HttpClient, public router: Router) { }

  signUpAdmin(first_name: string, last_name: string, email: string, password: string, is_admin: boolean) {
    const postData: SignupModel = {first_name: first_name, last_name: last_name, email: email, password: password, is_admin: is_admin};
    return this.http.post<any>(`${this.endpoint}/signup`, postData).pipe(
      map(
        (data) => {
          if (data.newUser.is_admin) {
            this.isLogin = true;
            this.roleAs = data.newUser.is_admin;
            localStorage.setItem('NAME', data.getUser.first_name);
            localStorage.setItem('token', `Bearer ${data.token}`);
            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', this.roleAs);
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

  signUpUser(first_name: string, last_name: string, email: string, password: string, is_admin: boolean) {
    const postData: SignupModel = {first_name: first_name, last_name: last_name, email: email, password: password, is_admin: is_admin};
    return this.http.post<any>(`${this.endpoint}/signup`, postData).pipe(
      map(
        (data) => {
          if (!data.newUser.is_admin) {
            this.isLogin = true;
            this.roleAs = data.newUser.is_admin;
            localStorage.setItem('NAME', data.getUser.first_name);
            localStorage.setItem('token', `Bearer ${data.token}`);
            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', this.roleAs);
            return data;
          } else {
            throw new Error('Please dont try to signup as admin');
          }
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
          if (data.getUser.is_admin) {
            this.isLogin = true;
            this.roleAs = data.getUser.is_admin;
            localStorage.setItem('NAME', data.getUser.first_name);
            localStorage.setItem('token', `Bearer ${data.token}`);
            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', this.roleAs);
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

  loginUser(email: string, password: string) {
    const postData: LoginModel = {email: email, password: password};
    return this.http.post<any>(`${this.endpoint}/login`, postData).pipe(
      map(
        (data) => {
          if (!data.getUser.is_admin) {
            this.isLogin = true;
            this.roleAs = data.getUser.is_admin;
            localStorage.setItem('NAME', data.getUser.first_name);
            localStorage.setItem('token', `Bearer ${data.token}`);
            localStorage.setItem('STATE', 'true');
            localStorage.setItem('ROLE', this.roleAs);
            return data;
          } else {
            throw new Error('Please use admin login panel');
          }
        },
        (err) => {
          return err;
        }
      )
    );
  }

  logout(){
    this.isLogin = false;
    localStorage.clear();
    return of({success: this.isLogin, role: ''});
  }

  isLoggedIn(){
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole(){
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }

  getProfile(){
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.get<UserModel>(`${this.endpoint}/me`, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  updatePassword(passwords) {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.put(`${this.endpoint}/passwordReset`, passwords, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

}
