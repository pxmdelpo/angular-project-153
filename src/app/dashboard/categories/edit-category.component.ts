import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edit-component',
    templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent implements OnInit {

    category: Category;
    editForm: FormGroup;
    loaded: boolean = false;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private categoryService: CategoryService) {

    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        console.log(id);
        this.categoryService.getCategoryById(id)
            .subscribe((category: Category) => {
                this.category = category;
                this.createForm();
                this.loaded = true;
            })
    }

    createForm() {
        this.editForm = new FormGroup({
            name: new FormControl(
                this.category.name, [Validators.required, Validators.minLength(4)]
            ),
            status: new FormControl(
                this.category.status.toString(),
                [Validators.required]
            )
        })
    }

    onCancel() {
        this.location.back();
    }

    onSave() {
        if (this.editForm.invalid) {
            return false;
        }

        const { name, status } = this.editForm.value;
        const { id, created_at } = this.category;

        const category: Category = {
            id,
            name,
            status: +status,
            updated_at: Date.now(),
            created_at
        };

        this.categoryService.updateCategory(category)
            .subscribe(() => {
                this.onCancel();
            })
    }
}