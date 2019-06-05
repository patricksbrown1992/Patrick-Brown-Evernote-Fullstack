import { RECEIVE_NOTE, RECEIVE_NOTES, DELETE_NOTE, CLEAR_NOTES} from '../../actions/noteAction';
import { REMOVE_USER } from '../../actions/sessionActions';
import {merge} from 'lodash';
const notesReducer = (state = {}, action) => {
    Object.freeze(state);
   

    switch(action.type){
        case RECEIVE_NOTES:
            const notes = {};
            action.notes.forEach((note) => {
                notes[note.id] = note;
            });
           
            return merge({}, state, notes);  
        case RECEIVE_NOTE:
         
            return merge({}, state, {[action.note.id]: action.note});
        case DELETE_NOTE:
           
            const newState = merge({}, state);
            delete newState[action.note.id];
            return newState;
        case REMOVE_USER:
            return {};
        case CLEAR_NOTES:
            return {};
        default:
            return state;
    }
};

export default notesReducer;