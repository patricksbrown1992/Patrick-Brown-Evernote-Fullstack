import { CHECK_EMAIL } from '../../actions/sessionActions';
import { merge } from 'lodash';

const checkUsersReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case CHECK_EMAIL:
            return action.email;
        default:
            return state;


    }
};