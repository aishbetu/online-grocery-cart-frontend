import { Component, OnInit } from '@angular/core';
import {ProductsManagementService} from "../products-management.service";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products = [];
  isError = false;
  response;
  constructor(private productsManagementService: ProductsManagementService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsManagementService.getProducts().subscribe((prods: any[]) => {
      this.products = prods;
      this.products.forEach(product => {
        product['isEdit'] = false;
      });
      console.log(this.products);
    }, (err) => {
      console.log(err);
    })
  }

  getProductById(product) {
    product.isEdit = true;
    console.log(product);
  }


  deleteProduct(product) {
    console.log(product._id);
    this.productsManagementService.deleteProduct(product._id).subscribe((deletedProduct: any) => {
      console.log(deletedProduct);
      const updatedProducts = this.products.filter((item) => item._id !== product._id);
      this.products = updatedProducts;
    }, (err) => {
      console.log(err);
    })
  }


  updateProduct(product) {
    const prodObj = {
      "title": product.title,
      "category": product.category.toLowerCase(),
      "description": product.description,
      "price": product.price
    };
    console.log(prodObj);
    this.productsManagementService.updateProduct(product._id, prodObj).subscribe((updatedProd: any) => {
      console.log(updatedProd);
      product.isEdit = false;
    }, (err) => {
      console.log(err);
      this.isError = true;
      this.response = err.error.message;
      setTimeout(()=> {
        this.isError = false;
        this.response = '';
      },2500)
      product.isEdit = true;
    });
  }

  closeEdit(product) {
    product.isEdit = false;
  }

}
