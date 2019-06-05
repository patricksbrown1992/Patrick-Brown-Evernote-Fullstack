import { merge } from 'lodash';
import { CLOSE_MODAL, OPEN_MODAL } from '../../actions/modalActions';


const modalReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);

    switch(action.type){
        case CLOSE_MODAL:
            return {};
        case OPEN_MODAL:
            const newState = merge({}, state, {type: action.modal, id: action.id});
            return newState;
        default: 
        return state;
    }
};

export default modalReducer;