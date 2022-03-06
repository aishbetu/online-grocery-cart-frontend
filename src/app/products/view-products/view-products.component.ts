import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products = [];
  allProducts = [];
  isAdded = false;
  isRejected = false;
  response: string;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.getProducts().subscribe((prods: any[]) => {
      this.products = prods;
      this.allProducts = prods;
      console.log(this.products);
    }, (err) => {
      console.log(err);
    })
  }

  onAddToCartClick(prodId) {
    this.productService.addToCart(prodId).subscribe((data) => {
      console.log(data);
      this.isAdded = true;
      this.response = data['message'];
      setTimeout(()=> {
        this.isAdded = false;
        this.response = '';
      },2000)
    }, (err) => {
      console.log(err);
      this.isRejected = true;
      this.response = err['message'];
      setTimeout(()=> {
        this.isRejected = false;
        this.response = '';
      },2000)
    })
  }

  onFilterClick(value: string) {
    this.products = this.allProducts;
    const filteredProducts = this.products.filter(p => p.category === value);
    this.products = filteredProducts;
  }
}
