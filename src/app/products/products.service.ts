import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  endpoint: string = 'http://localhost:5001/api/v1/products/';
  constructor(private http: HttpClient, public route: Router) { }

  addProduct(product){
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.post(this.endpoint, product, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  getProducts() {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.get(this.endpoint, header);
  }

  updateProduct(_id: string, prodObj){
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.put(`${this.endpoint}${_id}`, prodObj, header).pipe(
      map(
        (data) => {
          return data;
        }, (err) => {
          throw err;
        }
      )
    );
  }

  deleteProduct(_id: string) {
    const token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders().set('Authorization', token)
    }
    return this.http.delete(`${this.endpoint}${_id}`, header).pipe(
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
