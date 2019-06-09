import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    currentUser = new BehaviorSubject<any>(null);

    getCurrentUser() {
        return this.currentUser.value;
    }

    

}