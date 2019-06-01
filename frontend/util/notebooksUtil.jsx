export const getNotebooks = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: 'api/notebooks'
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