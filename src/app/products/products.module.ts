import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    HomeComponent,
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
export class ProductsModule { }
