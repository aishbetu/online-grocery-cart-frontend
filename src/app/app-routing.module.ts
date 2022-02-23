import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AdminSignupComponent} from "./auth/admin-signup/admin-signup.component";
import {AdminLoginComponent} from "./auth/admin-login/admin-login.component";
import {UserLoginComponent} from "./auth/user-login/user-login.component";
import {UserSignupComponent} from "./auth/user-signup/user-signup.component";
import {HomeComponent} from "./products/home.component";
import {ManageProductsComponent} from "./products/manage-products/manage-products.component";
import {AddProductComponent} from "./products/add-product/add-product.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'admin/signup', component: AdminSignupComponent},
      {path: 'admin/login', component: AdminLoginComponent},
      {path: 'login', component: UserLoginComponent},
      {path: 'signup', component: UserSignupComponent},
    ]
  },
  {
    path: 'products',
    component: HomeComponent,
    children: [
      {path: 'manage', component: ManageProductsComponent},
      {path: 'add', component: AddProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
