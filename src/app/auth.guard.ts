import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
        const userRole = this.authService.getRole();
        if (route.data.role && route.data.role.indexOf(userRole) === -1) {
          this.router.navigate(['/']);
          console.log("call hua?");
          console.log(route.data.role);
          return false;
        }
        return true;
    }
    if (route.data.role == 'false') {
      this.router.navigate(['auth/login']);
      return true;
    }
    else if (route.data.role == 'true') {
      this.router.navigate(['auth/admin/login']);
      return false;
    }
  }

}
