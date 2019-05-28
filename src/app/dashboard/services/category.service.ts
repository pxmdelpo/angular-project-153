import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    readonly BASE_URL: string = environment.api_url;
    readonly END_POINT: string = 'categories';

    constructor(private http: HttpClient) {}

    getCategories() {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.get(API_URL);
    }

    getCategoryById(id: number) {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.get(API_URL);
    }

    deleteCategory(id: number) {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.delete(API_URL);
    }

    updateCategory(category: Category) {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${category.id}`;

        return this.http.put(API_URL, category);
    }

    createCategory(category: Category) {

    }
}