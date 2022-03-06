import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout().subscribe((data) => {
      console.log(data);
      this.router.navigate(['../auth/admin/login']);
    }, (err) => {
      console.log(err);
    });
  }

}
