import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements  OnInit {
    model: Category;
    loaded: boolean = false;
    constructor(private location: Location,
                private route: ActivatedRoute,
                private categoryService: CategoryService) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        this.categoryService.getCategoryById(id).subscribe((category: Category) => {
            this.loaded = true;
            this.model = category;
        });
    }

    onCancel() {
        this.location.back();
    }

    onSave() {
        this.model.updated_at = Date.now();
        this.categoryService.updateCategory(this.model)
            .subscribe(() => this.onCancel());
    }
}
