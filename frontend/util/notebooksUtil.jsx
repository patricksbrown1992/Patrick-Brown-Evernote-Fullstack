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

export const createNotebook = notebook => {
    return $.ajax({
        method: 'POST',
        url: `api/notebooks`,
        data: {
            notebook
        }
    });
};

export const updateNotebook = id => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notebooks/${id}`,
        data: {
            notebook
        }
    });
};

export const deleteNotebook = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${id}`,
        
    });
};