import { CHECK_EMAIL, RECEIVE_ERRORS, REMOVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';

const checkUsersReducer = (state ={verified: false}, action) => {
    Object.freeze(state);

    switch(action.type){
        case CHECK_EMAIL:
       
            return action.email;
        case RECEIVE_ERRORS:
       
            return state;
        case REMOVE_USER:
            return {verified: false};
        default:
            return state;


    }
};
export default checkUsersReducer;