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

  allCategories: Category[];
  page = 1;
  pageSize = 3;
  collectionSize = 0;

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.allCategories = [];

    this.categoryService.getCategories()
      .subscribe((categories: Category[])=> {
        this.allCategories = categories;
        this.collectionSize = this.allCategories.length;
      });
  }

  get categories(): Category[] {
    return this.allCategories
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onUpdate(id: number) {
    this.router.navigate(['dashboard/categories/', id]);
  }

  onDelete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      // this.allCategories.splice(this.allCategories.indexOf(category), 1);
      this.allCategories = this.allCategories.filter(c => c.id !== id);
      this.collectionSize = this.allCategories.length;
    });
  }

}
