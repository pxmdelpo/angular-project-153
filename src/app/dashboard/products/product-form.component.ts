import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html'
})
export class ProductFormmComponent implements OnInit {
    productForm: FormGroup;
    categories: Category[];

    @Input() model: any = {};
    @Output() handleSubmit: EventEmitter<any> = new EventEmitter<any>();
    @Output() handleCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder,
                private categoryService: CategoryService) {}

    ngOnInit() {
        this.categories = [];
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        });

        this.productForm = this.fb.group({
            name: [this.model.name || '', [Validators.required, Validators.minLength(6)]],
            detail: [this.model.detail || '', [Validators.required, Validators.minLength(30)]],
            stock: [this.model.stock || 0, [Validators.required, Validators.min(0) ]],
            categoryId: [this.model.categoryId || 0, [Validators.required, Validators.min(1)]],
            price: [this.model.price || 0 , [Validators.required, Validators.min(1)]]
        });
    }

    onCancelClick() {
        this.handleCancel.emit(true);
    }

    onClick() {
        const { value, valid } = this.productForm;

        if (valid) {
            value.price = +value.price;
            value.categoryId = +value.categoryId;
            this.handleSubmit.emit(value);
        }
    }
}
