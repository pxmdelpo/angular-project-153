import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-new-category',
    templateUrl: './new-category.component.html'
})
export class NewCategoryComponent implements OnInit {
    newCategoryForm: FormGroup;

    constructor(private location: Location,
                private categoryService: CategoryService) {}

    ngOnInit() {
        this.newCategoryForm = new FormGroup({
            name: new FormControl('', [ Validators.required, Validators.minLength(4)]),
            status: new FormControl('1', [ Validators.required])
        });
    }

    onCancel() {
        this.location.back();
    }


    onSave(form: FormGroup) {
        if (form.invalid) {
            return false;
        }

        const { name, status } = form.value;
        const now = Date.now();
        const newCategory: Category = {
            name,
            status: +status,
            created_at: now,
            updated_at: now
        };
        this.categoryService.createCategory(newCategory).subscribe(res => {
            this.location.back();
        })
    }
}
