import { CHECK_EMAIL } from '../../actions/sessionActions';
import { merge } from 'lodash';

const checkUsersReducer = (state ={verified: false}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type){
        case CHECK_EMAIL:
            return action.email;
        default:
            return state;


    }
};
export default checkUsersReducer;