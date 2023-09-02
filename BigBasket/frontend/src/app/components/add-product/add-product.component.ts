import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductserviceService} from 'src/app/productservice.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  
  
  constructor(private service: ProductserviceService, private router: Router) { }

  ngOnInit(): void {
  }
}