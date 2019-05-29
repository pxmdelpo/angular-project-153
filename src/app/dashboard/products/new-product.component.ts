import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-new-product',
    template: `
        <div class="user-edit-component">
            <div class="container">
                <h2 class="mb-2 mt-0">Nuevo Producto</h2>
                <app-product-form
                    (handleSubmit)="handleSubmit($event)"
                    (handleCancel)="handleCancel($event)"
                ></app-product-form>
            </div>
        </div>
    `
})
export class NewProductComponent implements OnInit {

    constructor(private productService: ProductService,
                private location: Location) {}

    ngOnInit() {}

    handleCancel() {
        this.location.back();
    }

    handleSubmit(formValues: any) {
        const now = Date.now();
        const product: Product = {
            ...formValues,
            created_at: now,
            updated_at: now
        };

        this.productService.createProduct(product).subscribe(() => {
            this.handleCancel();
        });
    }
}
