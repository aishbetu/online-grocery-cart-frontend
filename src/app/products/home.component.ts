import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstNamee;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUserName();
  }

  onLogout() {
    this.authService.logout().subscribe((data) => {
      console.log(data);
      this.router.navigate(['../auth/login']);
    }, (err) => {
      console.log(err);
    });
  }

  getUserName() {
    this.firstNamee = localStorage.getItem('NAME');
  }
}
