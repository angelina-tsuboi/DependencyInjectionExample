import { Component, OnInit } from '@angular/core';
import { ProductServiceService, Product } from '../product-service.service';
import { MockProductService } from '../mock-product.service';


@Component({
  selector: 'product2',
  template: `
  <h2>Product 2: {{product.title}}</h2>
  `,
  styleUrls: ['./product2.component.css'],
  providers: [{provide: ProductServiceService, useClass: MockProductService}]
})
export class Product2Component implements OnInit {
  product: Product;

  constructor(productService: ProductServiceService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }

}
