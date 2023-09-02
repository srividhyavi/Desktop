import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';
import { ProductserviceService} from 'src/app/productservice.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  productsData:any;
constructor(public productservice:ProductserviceService){}

ngOnInit(): void {
  
}
}