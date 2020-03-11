import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    users: [],
    error: false,
    authenticated: false,
    loading: false,
    password: '',
    success: ''
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: false, loading: true, authenticated: false } );
};

const authSuccess = (state, action) => {
    const auth = state.users.length && state.users.includes(action.userId);
    return updateObject( state, { 
        users: !auth ? [...state.users, action.userId] : state.users,
        error: false,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error && true,
        loading: false,
        authenticated: false
    });
};


const authPwdStart = ( state, action ) => {
    return updateObject( state, { error: false } );
};

const authPwdSuccess = (state, action) => {
    return updateObject( state, { 
        error: false,
        success: action.success
     } );
};

const authPwdFail = (state, action) => {
    return updateObject( state, {
        error: action.error && true
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: 
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: 
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: 
            return authFail(state, action);
        case actionTypes.AUTH_PWD_START: 
            return authPwdStart(state, action);
        case actionTypes.AUTH_PWD_SUCCESS: 
            return authPwdSuccess(state, action);
        case actionTypes.AUTH_PWD_FAIL: 
            return authPwdFail(state, action);
        default:
            return state;
    }
};

export default reducer;