import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK} from '../../actions/notebookActions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            return action.notebooks;
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        default:
            return state;

    }   
};
export default usersReducer;