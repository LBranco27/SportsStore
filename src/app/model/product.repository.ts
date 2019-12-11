import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private productsList: Product[] = [];
    private products: Product[] = [];
    private categories: string[] = [];
    searchName: string;

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.productsList = data;
            this.products = this.productsList;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
    setSearchName(name: string){
      console.log(this.searchName);
      this.searchName = name;
      this.products = this.productsList.filter(p => p.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !==-1);
    }
}
