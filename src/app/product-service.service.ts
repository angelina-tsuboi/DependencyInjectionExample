import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Product {
  constructor(public title: string) {}
}

@Injectable()
export class ProductServiceService {

  getProduct(): Product{
    return new Product("IPhone");
  }
}
