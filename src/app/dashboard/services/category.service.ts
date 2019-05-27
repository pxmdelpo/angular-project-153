import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    private BASE_URL: string = environment.api_url;
    private END_POINT: string = 'categories';

    constructor(private http: HttpClient) {}

    getCategories(): Observable<Category[]> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.get<Category[]>(API_URL);
    }

    getCategoryById(id: number): Observable<Category> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.get<Category>(API_URL);
    }

    deleteCategory(id: number): Observable<{}> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.delete(API_URL);
    }

    updateCategory(category: Category): Observable<Category> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${category.id}`;
        return this.http.put<Category>(API_URL, category);
    }

    createCategory(category: Category): Observable<Category> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.post<Category>(API_URL, category);
    }
}
