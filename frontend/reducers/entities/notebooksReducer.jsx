import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, DESTROY_NOTEBOOK} from '../../actions/notebookActions';
import { REMOVE_USER} from '../../actions/sessionActions';
import { merge } from 'lodash';

const notebooksReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            const notebooks = {};
            action.notebooks.forEach((notebook) => {
                notebooks[notebook.id] = notebook;
            });
            // debugger
            return merge({}, state, notebooks);
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        case DESTROY_NOTEBOOK:
            const newState = merge({}, state);
            delete newState[action.notebook.id];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;

    }   
};
export default notebooksReducer;