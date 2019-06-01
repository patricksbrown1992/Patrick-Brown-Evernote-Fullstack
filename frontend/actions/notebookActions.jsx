import * as APIUtil from '../util/notebooksUtil';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";

const receiveNotebook = notebook => {
    debugger
    return ({

    
    type: RECEIVE_NOTEBOOK,
    notebook
    });
};
const receiveNotebooks = notebooks => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
});

export const getNotebooks = () => dispatch => (
    APIUtil.getNotebooks().then(notebooks => (dispatch(receiveNotebooks(notebooks))))
);

export const getNotebook = (notebook) => dispatch => (
    APIUtil.getNotebook(notebook).then(notebook => (dispatch(receiveNotebook(notebook))))
);