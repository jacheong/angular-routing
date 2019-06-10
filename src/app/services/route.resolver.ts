import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class RouteResolver implements Resolve<Observable<string>> {
    
    constructor() {}

    resolve() {
        return of('Lets go babyyyyyyy').pipe( delay(2000) );
    }

}