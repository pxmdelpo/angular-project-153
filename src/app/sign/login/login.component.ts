import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../dashboard/models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    model: any;
    hasError: boolean;

    constructor(private router: Router,
                private authService: AuthService) {}

    ngOnInit() {
        this.hasError = false;
        this.model = {
            email: '',
            password: ''
        };
    }

    onSubmit() {
        this.hasError = false;
        this.authService.validateUser(this.model).subscribe((user: User) => {
            if (user) {
                this.router.navigate(['dashboard']);
            } else {
                this.hasError = true;
            }
        });
    }
}
