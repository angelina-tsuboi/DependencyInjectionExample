import {ProductServiceService} from './product-service.service';
import {MockProductService} from './mock-product.service';

export function productServiceFactory(isProd: boolean){
  if(isProd){
    return new ProductServiceService();
  }else{
    return new MockProductService();
  }
}
