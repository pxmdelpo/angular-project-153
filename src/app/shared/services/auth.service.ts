import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    readonly BASE_URL:string = environment.api_url;
    readonly API: string = 'users';

    user = null;

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        
        return this.getUserByEmail(email).pipe(
            map((res: any) => {
                if (res.length) {
                    const [user] = res;
                    this.user = user;
                    if (user.password === password) {
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
}