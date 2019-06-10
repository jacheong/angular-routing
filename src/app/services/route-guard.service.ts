import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.getCurrentUser() !== null) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canLoad(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.getCurrentUser() !== null) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
