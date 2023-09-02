import { Injectable } from '@angular/core';
import { Product } from './models';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) {}
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(baseUrl);
}

getProduct(_id: any): Observable<Product> {
  return this.http.get<Product>(`${baseUrl}/${_id}`);
}

createProduct(product: any): Observable<any> {
  return this.http.post(baseUrl, product);
}

updateProduct(id: any, product: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, product);
}

deleteProduct(_id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${_id}`);
}

deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
}

findByTitle(title: any): Observable<Product[]> {
  return this.http.get<Product[]>(`${baseUrl}?name=${Product}`);
}
}


