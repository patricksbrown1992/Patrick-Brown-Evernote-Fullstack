import {RECEIVE_USER, REMOVE_USER} from '../../actions/sessionActions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){


        default: 
            return state;
    }
};

export default usersReducer;