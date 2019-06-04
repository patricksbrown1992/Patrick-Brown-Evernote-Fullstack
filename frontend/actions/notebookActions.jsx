import * as APIUtil from '../util/notebooksUtil';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const DESTROY_NOTEBOOK = 'DESTROY_NOTEBOOK';

const receiveNotebook = notebook => {
    return ({
    type: RECEIVE_NOTEBOOK,
    notebook
    });
};

const destroyNotebook = () => {
    debugger
    return ({
        type: DESTROY_NOTEBOOK
    });
};

const receiveNotebooks = notebooks => {
    // debugger
    return ({

        type: RECEIVE_NOTEBOOKS,
        notebooks
    });
};

export const getNotebooks = (user) => dispatch => (
    APIUtil.getNotebooks(user).then(notebooks => (dispatch(receiveNotebooks(notebooks))))
);

export const getNotebook = (id) => dispatch => (
    APIUtil.getNotebook(id).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const createNotebook = (notebook) => dispatch => (
    APIUtil.createNotebook(notebook).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const updateNotebook = (id) => dispatch => (
    APIUtil.updateNotebook(id).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const deleteNotebook = (id) => dispatch => {
    debugger
    return APIUtil.deleteNotebook(id).then(notebook => {
        debugger
       return (payload) => (dispatch(destroyNotebook()));}
    );
};
    