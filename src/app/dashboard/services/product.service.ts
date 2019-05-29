import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    private BASE_URL: string = environment.api_url;
    private END_POINT: string = 'products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        const API_URL: string = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.get<Product[]>(API_URL);
    }

    getProductById(id: number): Observable<Product> {
        const API_URL: string = `${this.BASE_URL}/${this.END_POINT}/${id}`;

        return this.http.get<Product>(API_URL);
    }

    createProduct(product: Product): Observable<Product> {
        const API_URL: string = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.post<Product>(API_URL, product);
    }

    updateProduct(product: Product): Observable<Product> {
        const API_URL: string = `${this.BASE_URL}/${this.END_POINT}/${product.id}`;

        return this.http.put<Product>(API_URL, product);
    }

    deleteProduct(id: number) {
        const API_URL: string = `${this.BASE_URL}/${this.END_POINT}/${id}`;

        return this.http.delete(API_URL);
    }
}
