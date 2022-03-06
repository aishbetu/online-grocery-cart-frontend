import { Component, OnInit } from '@angular/core';
import {ProductsManagementService} from "../products-management.service";
import {Router} from "@angular/router";
import {ProductsModel} from "../shared/Products.model";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  file: any;
  isError = false;
  response;
  imageSrc;
  constructor(private productsManagementService: ProductsManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList){
    console.log(files);
    this.file = files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(this.file);
  }

  onSubmit(formData: ProductsModel){
    console.log(formData);
    console.log(this.file);
    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('description', formData.description);
    payload.append('price', formData.price);
    payload.append('category', formData.category);
    payload.append('image', this.file);
    this.productsManagementService.addProduct(payload).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['products-management/']);
    }, (err) => {
      console.log(err);
      this.isError = true;
      this.response = err.error.message;
      setTimeout(() => {
        this.isError = false;
        this.response = '';
      },2000);
    });
  }

}
