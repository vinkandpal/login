import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    password: ''
};

const setPassword = (state, action) => {
    return updateObject( state, {
        password: action.password
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.USER_PASSWORD: 
            return setPassword(state, action);
        default:
            return state;
    }
};

export default reducer;