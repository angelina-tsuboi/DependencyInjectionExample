import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { Product2Component } from './product2/product2.component';
import { ProductServiceService } from './product-service.service';
import { productServiceFactory } from './product.factory';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: ProductServiceService, useFactory: productServiceFactory, deps: ['IS_PROD_ENVIRONMENT']}, {provide: 'IS_PROD_ENVIRONMENT',
  useValue: environment.production}],
  bootstrap: [AppComponent]
})
export class AppModule { }
