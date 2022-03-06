import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isAdded;
  response;
  isRejected;
  prodId: string;
  product: ProductModel;
  title;
  price;
  category;
  description;
  image;
  constructor(private productService: ProductsService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.prodId = params['id'];
    });
    this.getProductDetails(this.prodId);
  }

  getProductDetails(prodId){
    this.productService.getProduct(prodId).subscribe((data) => {
      console.log(data);
      this.product = data;
      this.title = this.product.title;
      this.category = this.product.category;
      this.price = this.product.price;
      this.description = this.product.description;
      this.image = this.product.image;
    }, (err) => {
      console.log(err);
    });
  }


  onAddToCart(productId) {
    this.productService.addToCart(productId).subscribe((data) => {
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



}
