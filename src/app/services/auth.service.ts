import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as SessionActions from '../actions/session.actions';
import { State } from '../reducers';

@Injectable()
export class AuthService {

    currentUser = new BehaviorSubject<any>(null);

    constructor(
        private router: Router,
        private store: Store<State>
    ) {}

    getCurrentUser() {
        return this.currentUser.value;
    }

    authenticate( user: User ) {
        if ( user.username === 'justin' && user.password === 'cheong' ) {
            this.currentUser.next(user);
            this.store.dispatch( new SessionActions.Login(user) );
            this.router.navigate(['/home']);
        }
    }

    logOut() {
        this.currentUser.next(null);
        this.store.dispatch( new SessionActions.Login(null) );
        this.router.navigate(['/login']);
    }

}