import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK} from '../../actions/notebookActions';
import { merge } from 'lodash';

const notebooksReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type){
        case RECEIVE_NOTEBOOKS:
            const notebooks = {};
            action.notebooks.forEach((notebooks) => {
                notebooks[notebook.id] = notebook;
            });
            debugger
            return merge({}, state, notebooks);
        case RECEIVE_NOTEBOOK:
            return merge({}, state, {[action.notebook.id]: action.notebook});
        default:
            return state;

    }   
};
export default notebooksReducer;