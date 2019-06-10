import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiResolver implements Resolve<any> {

    constructor(
        private userService: UserService
    ) {}


    resolve() {
        return this.userService.getUsers().pipe(
            catchError(
                () => of('Data not available at this time')
            )
        );
    }
}