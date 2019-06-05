import * as APIUtil from '../util/notebooksUtil';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const DESTROY_NOTEBOOK = 'DESTROY_NOTEBOOK';

const receiveNotebook = notebook => {
    // debugger
    return ({
    type: RECEIVE_NOTEBOOK,
    notebook
    });
};

const destroyNotebook = () => {
    // debugger
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

export const createNotebook = (notebook) => dispatch => {
    // debugger
    return APIUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)));

};

export const updateNotebook = (notebook) => dispatch => (
    APIUtil.updateNotebook(notebook).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const deleteNotebook = (id) => dispatch => {
    // debugger
    return APIUtil.deleteNotebook(id).then(notebook => (dispatch(destroyNotebook())));
};
    