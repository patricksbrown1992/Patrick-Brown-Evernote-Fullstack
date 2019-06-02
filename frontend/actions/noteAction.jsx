import * as APIUtil from '../util/notesUtil';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

const receiveNotes = notes => ({
    type: RECEIVE_NOTES,
    notes
});

const receiveNote = note => ({

    type: RECEIVE_NOTE,
    note
});

const destroyNote = () => ({
    type: DELETE_NOTE
});

export const getNotes = (notebook) => dispatch => (
    APIUtil.getNotes(notebook).then(notes => dispatch(receiveNotes(notes)))
);

export const getNote = (notebook, note) => dispatch => (
    APIUtil.getNote(notebook, note).then(note => dispatch(receiveNote(note)))
);

export const createNote = (notebook, note) => dispatch => (
    APIUtil.createNote(notebook, note).then(note => dispatch(receiveNote(note)))
);

export const updateNote = (notebook, id) => dispatch => (
    APIUtil.updateNote(notebook, id).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = (notebook, note) => dispatch => (
    APIUtil.deleteNote(notebook, note).then( () => dispatch(destroyNote(note)))
);

