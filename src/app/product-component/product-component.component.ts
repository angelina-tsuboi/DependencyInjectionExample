import { Component, OnInit } from '@angular/core';
import { ProductServiceService, Product } from '../product-service.service';

@Component({
  selector: 'product1',
  template: `
  <div>
  <h2>Product 1: {{product.title}}</h2>
  </div>
  `,
  styleUrls: ['./product-component.component.css'],
  providers: [ProductServiceService]
})



export class ProductComponentComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductServiceService) {
    this.product = productService.getProduct();
   }

  ngOnInit(): void {
  }

}
