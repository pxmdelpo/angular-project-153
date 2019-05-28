import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    user: User;

    constructor(private router: Router,
                private authService: AuthService) {

    }

    ngOnInit() {
        this.user = this.authService.getUser();
    }

    onLogout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/sign']);
        });
    }
}