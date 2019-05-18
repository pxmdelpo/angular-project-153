import { Injectable } from '@angular/core';

import { User } from '../../dashboard/models/user.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    readonly BASE_URL: string = environment.api_url;
    readonly END_POINT: string = 'users';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        console.log('AuthService constructor!');
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserByEmail(email: string): Observable<User[]> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}?email=${email}`;

        return this.http.get<User[]>(API_URL);
    }

    validateUser({email, password}): Observable<User> {
        return this.getUserByEmail(email).pipe(
            map((users: User[]) => {
                if (users.length) {
                    const [user] = users;

                    if (user.password === password) {
                        sessionStorage.setItem('currentUser', JSON.stringify(user));
                        this.currentUserSubject.next(user);
                        return user;
                    }
                }

                return null;
            })
        );
    }

    registerUser(user: any): Observable<User> {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;
        const body = {
            created_at: Date.now(),
            updated_at: Date.now(),
            status: 2,
            ...user
        };

        if (body.confirmPassword) {
            delete body.confirmPassword;
        }

        console.log(body);

        return this.http.post<User>(API_URL, body);
    }

    logout() {
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        return of({});
    }
}
