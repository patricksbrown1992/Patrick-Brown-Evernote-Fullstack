import { merge } from 'lodash';
import { CLOSE_MODAL, OPEN_MODAL } from '../../actions/modalActions';


const modalReducer = (state = null, action) => {
    debugger
    Object.freeze(state);

    switch(action.type){
        case CLOSE_MODAL:
            return null;
        case OPEN_MODAL:
            return action.modal;
        default: 
        return state;
    }
};

export default modalReducer;