import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../dashboard/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any;

    constructor(private router: Router,
                private authService: AuthService) { }

    ngOnInit() {
        this.model = {
            name: '',
            email: '',
            lastname: '',
            password: '',
            confirmPassword: '',
        };
    }

    onSubmit() {
        this.authService.registerUser(this.model).subscribe(() => {
            this.router.navigate(['sign/login']);
        });
    }
}
