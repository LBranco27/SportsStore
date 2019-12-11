// { PipeTransform, Pipe } from '@angular/core';
//import { Product } from "../model/product.model";
//
//@Pipe({
//  name: "productFilter",
//  pure: false
//})
////export class ProductFilterPipe implements PipeTransform {
//  private count=0;
//  transform(products: Product[], searchName: string): Product[] {
//    this.count++;
//    console.log('Filter pipe executed count' + this.count);
//    if (!products || !searchName) {
//      retrurn products;
//    }
//    return products.filter(product =>
//      product.name.toLowerCase().indexOf(searchName.toLowerCase())) !== -1);
//  }
//}
//
