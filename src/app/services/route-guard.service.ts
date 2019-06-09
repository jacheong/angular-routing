import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouteGuardService implements CanActivate, CanLoad {
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    canLoad(): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
