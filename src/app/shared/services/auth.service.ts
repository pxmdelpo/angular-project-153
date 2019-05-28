import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    readonly BASE_URL:string = environment.api_url;
    readonly API: string = 'users';

    user = null;

    constructor(private http: HttpClient) {
        const _user = sessionStorage.getItem('user');

        if (_user) {
            this.user = JSON.parse(_user);
        }
    }

    login(email: string, password: string) {
        
        return this.getUserByEmail(email).pipe(
            map((res: any) => {
                if (res.length) {
                    const [user] = res;

                    if (user.password === password) {
                        this.user = user;
                        sessionStorage.setItem('user', JSON.stringify(this.user));
                        return { logueado: true }
                    }
                }

                return { logueado: false };
            })
        );
    }
    
    private getUserByEmail(email: string) {
        const API_URL = `${this.BASE_URL}/${this.API}/?email=${email}`;
        
        return this.http.get(API_URL); // Observable
    }

    getUser() {
        return this.user;
    }

    logout() {
        this.user = null;
        sessionStorage.clear();

        return of(true);
    }
}