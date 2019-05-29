import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[];
    categories: Category[];

    constructor(private productService: ProductService,
                private router: Router,
                private categoryService: CategoryService) { }

    ngOnInit() {
        this.categories = [];
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }

    getCategoryName(id: number): string {
        if (this.categories.length) {
            const name = this.categories.find(({ id: key }) => key === id).name;

            return name;
        }

        return '';
    }

    onUpdateProduct(product: Product) {
        this.router.navigate(['/dashboard/products/', product.id]);
    }

    onDeleteProduct(product: Product) {
        this.productService.deleteProduct(product.id).subscribe(() => {
            this.products.splice(this.products.indexOf(product), 1);
        })
    }
}
