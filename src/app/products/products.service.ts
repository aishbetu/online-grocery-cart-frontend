import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {ProductModel} from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  endpoint: string = 'http://localhost:5001/api/v1/products/';
  cartEndpoint: string = 'http://localhost:5001/api/v1/cart/';
  constructor(private http: HttpClient, public route: Router) { }

  getProducts() {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.get(this.endpoint, header);
  }

  getProduct(prodId): Observable<ProductModel> {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.get<ProductModel>(`${this.endpoint}${prodId}`, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  addToCart(prodId) {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.post(`${this.cartEndpoint}add/${prodId}`, null, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  getCart() {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.get(this.cartEndpoint, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  deleteCartItem(prodId) {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.delete(`${this.cartEndpoint}${prodId}`, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

}
