import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate() {
        const user = this.authService.getUser();

        if (!user) {
            this.router.navigate(['sign/login']);
            return false;
        }

        return true;
    }
    
}