import { Component, OnInit } from '@angular/core';
import {ProductsModel} from "../shared/Products.model";
import {ProductsService} from "../products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  file: any;
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  handleFileInput(files: FileList){
    console.log(files);
    this.file = files[0];
    console.log(this.file);
  }

  onSubmit(formData: ProductsModel){
    console.log(formData);
    console.log(this.file);
    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('description', formData.description);
    payload.append('price', formData.price);
    payload.append('category', formData.category);
    payload.append('title', this.file);
    this.productService.addProduct(payload).subscribe((data: any) => {
      console.log("success");
      console.log(data);
    }, (err) => {
      console.log("Error");
      console.log(err);
    });
  }
}
