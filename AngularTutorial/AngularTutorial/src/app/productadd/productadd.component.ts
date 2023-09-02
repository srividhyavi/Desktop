import { Component } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../product.service'; 
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {
  product: Product = {
    name: '',
    quantity: '',
    price: '',
    image: ''
  };
  submitted = true;

  constructor(private productService: ProductService) {}

  saveProduct(): void {
    const product = {
      name: this.product.name,
      quantity: this.product.quantity,
      price: this.product.price,
      image: this.product.image
    };

    this.productService.createProduct(product).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = false;
      },
      error: (e) => console.error(e)
    });
  }

  newProduct(): void {
    this.submitted = true;
    this.product = {
      name: '',
      quantity: '',
      price: '',
      image: ''
    };
  }
}

