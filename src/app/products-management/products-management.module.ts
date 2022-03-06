import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsManagementComponent } from './products-management.component';
import {RouterModule} from "@angular/router";
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ProductsManagementComponent,
    ManageProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductsManagementModule { }
