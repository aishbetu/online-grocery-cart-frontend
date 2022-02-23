import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((prods: any[]) => {
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
    this.productService.deleteProduct(product._id).subscribe((deletedProduct: any) => {
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
      "category": product.category,
      "description": product.description,
      "price": product.price
    };
    console.log(prodObj);
    this.productService.updateProduct(product._id, prodObj).subscribe((updatedProd: any) => {
      console.log(updatedProd);
      product.isEdit = false;
    }, (err) => {
      console.log(err);
      product.isEdit = true;
    });
  }

  closeEdit(product) {
    product.isEdit = false;
  }

}
