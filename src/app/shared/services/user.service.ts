import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
    readonly BASE_URL: string = environment.api_url;

    constructor(private http: HttpClient) {}

    createUser(model: any) {
        const API_URL = `${this.BASE_URL}/users`;
        const now = Date.now();

        const body = {
            status: 1,
            created_at: now,
            updated_at: now,
            ...model
        };

        return this.http.post(API_URL, body);
    }

    getUsers() {
        const API_URL = `${this.BASE_URL}/users`;
        return this.http.get(API_URL);
    }
}