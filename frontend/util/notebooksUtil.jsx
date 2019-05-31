export const getNotebooks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/session/notebooks',
        data: {
            notebooks
        }
    });
};

export const getNotebook = notebook => {
    return $.ajax({
        method: 'GET',
        url: `api/session/notebooks/${notebook.id}`,
        data: {
            notebook
        }
    });
};