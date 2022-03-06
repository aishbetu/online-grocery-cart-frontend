import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AdminSignupComponent} from "./auth/admin-signup/admin-signup.component";
import {AdminLoginComponent} from "./auth/admin-login/admin-login.component";
import {UserLoginComponent} from "./auth/user-login/user-login.component";
import {UserSignupComponent} from "./auth/user-signup/user-signup.component";
import {HomeComponent} from "./products/home.component";
import {ViewProductsComponent} from "./products/view-products/view-products.component";
import {ProductsManagementComponent} from "./products-management/products-management.component";
import {ManageProductsComponent} from "./products-management/manage-products/manage-products.component";
import {AddProductComponent} from "./products-management/add-product/add-product.component";
import {AuthGuard} from "./auth.guard";
import {CartComponent} from "./products/cart/cart.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {UserProfileComponent} from "./products/user-profile/user-profile.component";

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
    path: 'products-management',
    component: ProductsManagementComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'true'
    },
    children: [
      {path: '', component: ManageProductsComponent},
      {path: 'add-product', component: AddProductComponent }
    ]
  },
  {
    path: 'products',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      // is_admin false
      role: 'false'
    },
    children: [
      {path: '', component: ViewProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'view/:id', component: ProductDetailComponent},
      {path: 'user-profile', component: UserProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
