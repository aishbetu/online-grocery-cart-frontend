import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cart;
  bill;
  error = false;
  cartError: string;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.productService.getCart().subscribe((data) => {
      this.cart = data;
      this.bill = this.cart.bill;
      console.log(this.cart);
      this.cartItems = this.cart.items;
    }, (err) => {
      this.error = true;
      this.cartError = err.error.message;
      console.log(err);
    });
  }

  onClickDeleteItem(itemId){
    console.log(itemId);
    this.productService.deleteCartItem(itemId).subscribe((data) => {
      console.log(data);
      this.cart = data;
      this.bill = this.cart.bill;
      const updatedItems = this.cartItems.filter((item) => item.itemId !== itemId);
      this.cartItems = updatedItems;
    }, (err) => {
      console.log(err);
    })
  }

}
