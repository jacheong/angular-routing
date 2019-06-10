import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) {}

    getUsers(): Observable<any> {
        return this.http.get( `${environment.userApi}/users` );
    }

    getUser(id): Observable<any> {
        return this.http.get(`${environment.userApi}/users/${id}`);
    }
}