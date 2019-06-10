import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class IdResolver implements Resolve<any> {

    constructor(
        private userService: UserService
    ) {}

    resolve( route: ActivatedRouteSnapshot ) {
        return this.userService.getUser( route.paramMap.get('id') ).pipe(
            catchError(
                () => of("No data available at this time")
            )
        );
    }

}