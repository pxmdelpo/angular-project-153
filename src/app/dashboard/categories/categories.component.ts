import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    private allCategories: Category[];
    page: number = 1;
    pageSize: number = 5;
    collectionSize: number;

    constructor(private router: Router,
                private categoryService: CategoryService) { }

    ngOnInit() {
        this.allCategories = [];
        this.categoryService.getCategories().subscribe((categories: Category[]) => {
            this.allCategories = categories;
            this.collectionSize = this.allCategories.length;
        });
    }

    get categories() {
        return this.allCategories
            .map((category, i) => ({ idx: i + 1, ...category}))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    onUpdateCategory(category: Category) {
        this.router.navigate(['/dashboard/categories/', category.id]);
    }

    onRemoveCategory(category: Category) {
        this.categoryService.deleteCategory(category.id)
            .subscribe(() => this.allCategories.splice(this.allCategories.indexOf(category), 1));
    }

}
