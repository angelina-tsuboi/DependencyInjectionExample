import { Injectable } from '@angular/core';
import { Product } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  constructor() { }

  getProduct() : Product{
    return new Product("Samsung")
  }
}
