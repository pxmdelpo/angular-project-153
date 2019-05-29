import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  deleteMessage: string;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.allCategories = [];

    this.categoryService.getCategories()
      .subscribe((categories: Category[]) => {
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

  modalDelete(content: any, category: Category) {
    this.deleteMessage = `¿Deseas eliminar la categoría: <b>${category.name}</b>?`;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then(
        () => this.onDelete(category.id),
        () => { }
      );
  }

}
