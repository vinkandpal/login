import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    username: ''
};

const setUsername = (state, action) => {
    return updateObject( state, {
        username: action.username
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.USER_NAME: 
            return setUsername(state, action);
        default:
            return state;
    }
};

export default reducer;