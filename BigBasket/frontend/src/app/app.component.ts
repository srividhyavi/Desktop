import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Product } from './models/product';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductserviceService]
})
export class AppComponent implements OnInit {
  constructor(public productservice:ProductserviceService){}

  ngOnInit(): void {
    this.getProducts()
  }
getProducts(){
  this.productservice.getProducts()
  .subscribe((res)=>{
    this.productservice.products = res as Product[];
  })
}
getProduct(_id:string){
  this.productservice.getProduct(_id)
  .subscribe((res)=>{
    this.getProducts()
    this.productservice.selectedProduct = new Product()
  })
}
createProduct(form:NgForm){
  if(form.value._id){
    this.productservice.updateProduct(form.value)
    .subscribe((res)=>{
      this.getProducts()
      this.productservice.selectedProduct = new Product()
  
    })
  }else{
      this.productservice.createProduct(form.value)
      .subscribe((res)=>{
        this.getProducts()
        this.productservice.selectedProduct = new Product()
      })  
    }
  

 }
saveProduct(product:Product){
  this.productservice.selectedProduct = new Product();
}
editProduct(product:Product){
  this.productservice.selectedProduct = product;
}
deleteProduct(_id:string){
  this.productservice.deleteProduct(_id)
  .subscribe((res)=>{
    this.getProducts()
    this.productservice.selectedProduct = new Product()
  })
}
}
