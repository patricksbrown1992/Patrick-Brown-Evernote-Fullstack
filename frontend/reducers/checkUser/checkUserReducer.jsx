import { CHECK_EMAIL, RECEIVE_ERRORS } from '../../actions/sessionActions';
import { merge } from 'lodash';

const checkUsersReducer = (state ={verified: false}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type){
        case CHECK_EMAIL:
            debugger
            return action.email;
        case RECEIVE_ERRORS:
            debugger
            return {};
        default:
            return state;


    }
};
export default checkUsersReducer;