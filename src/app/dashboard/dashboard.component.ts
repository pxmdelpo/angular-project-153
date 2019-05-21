import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-dashboard',
    template: '<p>Dashboard</p>'
})
export class DashboardComponent implements OnInit {
    user: any;

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        this.user = this.authService.getUser();

        console.log(this.user);
    }
}