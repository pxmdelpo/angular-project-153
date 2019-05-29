import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-product',
    template: `
        <div class="product-edit-component">
            <div class="container">
                <h2 class="mb-2 mt-0">Editar Producto</h2>
                <app-product-form *ngIf="loaded"
                    [model]="product"
                    (handleSubmit)="handleSubmit($event)"
                    (handleCancel)="handleCancel($event)"
                ></app-product-form>
            </div>
        </div>
    `
})
export class EditProductComponent implements OnInit {
    product: Product;
    loaded: boolean = false;

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        this.productService.getProductById(id).subscribe(product => {
            this.product = product;
            this.loaded = true;
        });
    }

    handleCancel() {
        this.location.back();
    }

    handleSubmit(formValues: any) {
        const now = Date.now();
        const product: Product = {
            ...this.product,
            ...formValues,
            updated_at: now
        };

        this.productService.updateProduct(product).subscribe(() => {
            this.handleCancel();
        });
    }
}
