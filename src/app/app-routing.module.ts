import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AdminSignupComponent} from "./auth/admin-signup/admin-signup.component";
import {AdminLoginComponent} from "./auth/admin-login/admin-login.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'admin/signup', component: AdminSignupComponent},
      {path: 'admin/login', component: AdminLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
