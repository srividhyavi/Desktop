import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 selectedProduct:Product;
products:Product[]=[];
  constructor(private http: HttpClient) { 
    this.selectedProduct = new Product()
  }
 getProducts(){
  return this.http.get('http://localhost:3000/api/products')
 }
 getProduct(_id:string){
  return this.http.get('http://localhost:3000/api/products/${_id}')
 }
 createProduct(product:Product){
  return this.http.post('http://localhost:3000/api/products', product)
 } 
 updateProduct(product:Product){
  return this.http.put('http://localhost:3000/api/products/${product._id}',product)
 }
 deleteProduct(_id:string){
  return this.http.delete('http://localhost:3000/api/products/${_id}')
 } 
} 


   
 



