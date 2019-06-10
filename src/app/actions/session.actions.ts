import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum SessionActionTypes {
    Login = '[SESSION] Login',
    Logout = '[SESSION] Logout'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class Login implements Action {
    readonly type = SessionActionTypes.Login;

    constructor(public payload: User) { }
}

export class Logout implements Action {
    readonly type = SessionActionTypes.Logout;

    constructor(public payload: User) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type SessionActions
                        = Login
                        | Logout;
