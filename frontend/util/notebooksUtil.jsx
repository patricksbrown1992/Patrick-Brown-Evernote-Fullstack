export const getNotebooks = (user) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: 'api/notebooks',
        data: {
            user_id: user.id
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