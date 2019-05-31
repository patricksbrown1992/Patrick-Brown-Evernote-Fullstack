export const getNotebooks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/notebooks',
        data: {
            notebooks
        }
    });
};

export const getNotebook = notebook => {
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${notebook.id}`,
        data: {
            notebook
        }
    });
};