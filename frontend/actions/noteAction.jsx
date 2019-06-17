import * as APIUtil from '../util/notesUtil';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES';

const receiveNotes = notes => ({
    type: RECEIVE_NOTES,
    notes
});
export const clearNotes = () =>{
    // debugger
    return {

        type: CLEAR_NOTES
    };
};

const receiveNote = note => {
    // debugger
    return {

        type: RECEIVE_NOTE,
        note
    };
};

const destroyNote = (note) => ({
    type: DELETE_NOTE,
    note
});

export const getNotes = (id, filters) => dispatch => (
    APIUtil.getNotes(id, filters).then(notes => dispatch(receiveNotes(notes)))
);

export const getNote = (notebook, note) => dispatch => (
    APIUtil.getNote(notebook, note).then(note => dispatch(receiveNote(note)))
);

export const createNote = ({id, note}) => dispatch => {
    // debugger
    return APIUtil.createNote(id, note).then(note => dispatch(receiveNote(note)));
};

export const updateNote = ({id, note}) => dispatch => (
    APIUtil.updateNote(id, note).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = (note) => dispatch => (
    APIUtil.deleteNote(note).then( (note) => dispatch(destroyNote(note)))
);

