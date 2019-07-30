import * as APIUtil from '../util/notebooksUtil';

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const DESTROY_NOTEBOOK = 'DESTROY_NOTEBOOK';
export const CLEAR_NOTEBOOKS = 'CLEAR_NOTEBOOKS';
export const RECEIVE_SEARCHED_NOTEBOOKS = 'RECEIVE_SEARCHED_NOTEBOOKS';

export const receiveSearchedNotebooks = ({notebooks, searches}) => {
    return {
        type: RECEIVE_SEARCHED_NOTEBOOKS,
        notebooks,
        searches
    }
}

const receiveNotebook = notebook => {
    return ({
        type: RECEIVE_NOTEBOOK,
        notebook
    });
};

const destroyNotebook = (notebook) => {

    return ({
        type: DESTROY_NOTEBOOK,
        notebook
    });
};

const receiveNotebooks = notebooks => {
    
    return ({

        type: RECEIVE_NOTEBOOKS,
        notebooks
    });
};

export const clearNotebooks = () => {
    return {
        type: CLEAR_NOTEBOOKS
    }
}

export const getNotebooks = (user) => dispatch => (
    APIUtil.getNotebooks(user).then(notebooks => (dispatch(receiveNotebooks(notebooks))))
);

export const getNotebook = (id) => dispatch => (
    APIUtil.getNotebook(id).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const createNotebook = (notebook) => dispatch => {

    return APIUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)));

};

export const updateNotebook = (notebook) => dispatch => (
    APIUtil.updateNotebook(notebook).then(notebook => (dispatch(receiveNotebook(notebook))))
);

export const deleteNotebook = (notebook) => dispatch => {
    
    return APIUtil.deleteNotebook(notebook).then(notebook => (dispatch(destroyNotebook(notebook))));
};

export const searchNotebooks = string => dispatch => (
    APIUtil.searchNotebooks(string).then( (notebook) => dispatch(receiveSearchedNotebooks(notebook)))
)

    