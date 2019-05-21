import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    model: any;
    hasError: boolean = false;

    constructor(private router: Router,
                private authService: AuthService) {}

    ngOnInit() {
        this.model = {
            email: 'madepozo@gmail.com',
            password: '123456'
        };
    }

    onSubmit() {
        const { email, password } = this.model;

        this.authService.login(email, password).subscribe(res => {
            if (res.logueado) {
                this.router.navigate(['/dashboard']);
            }

            this.hasError = true;
        });
    }
}