import { RECEIVE_NOTE, RECEIVE_NOTES, DELETE_NOTE} from '../../actions/noteAction';

const notesReducer = (state = {}, action) => {
    Object.freeze(state);


    switch(action.type){
        case RECEIVE_NOTES:
            const notes = {};
            action.notes.forEach((notes) => {
                notes[note.id] = note;
            });
            debugger
            return merge({}, state, notes);  
        case RECEIVE_NOTE:
            return merge({}, state, {[action.note.id]: action.note});
        case DELETE_NOTE:
            return {};
        default:
            return state;
    }
};

export default notesReducer;