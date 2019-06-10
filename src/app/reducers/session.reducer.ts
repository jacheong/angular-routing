import { SessionActions, SessionActionTypes } from '../actions/session.actions';
import { User } from '../models/user.model';

export interface Session {
    user: User
};

const initialState: Session = {
    user: {
        username: '',
        password: ''
    }
};

export function reducer(state = initialState, action: SessionActions ): Session {
    switch (action.type) {
        case SessionActionTypes.Login: {
            return {...state, user: action.payload};
        }

        case SessionActionTypes.Logout: {
            return { ...state, user: action.payload };
        }

        default: {
            return state;
        }
    }
}