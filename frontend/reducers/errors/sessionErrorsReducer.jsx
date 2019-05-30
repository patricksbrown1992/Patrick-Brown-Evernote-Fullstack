import {
    RECEIVE_ERRORS,
    RECEIVE_USER,
    CHECK_EMAIL

} from '../../actions/sessionActions';
import {merge} from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_ERRORS:
            return merge([], state, action.errors);

            // debugger
            
        case RECEIVE_USER:

            return merge([], state,[] );
        case CHECK_EMAIL:
            return merge([], state, []);
      
        default:
            return state;
    }
};

export default sessionErrorsReducer;