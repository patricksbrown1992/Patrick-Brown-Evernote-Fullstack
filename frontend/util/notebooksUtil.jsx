export const getNotebooks = (user) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: '/api/notebooks',
        data: {
            user_id: user.id
        }
    });      
};

export const getNotebook = id => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${id}`,
        
    });
};

export const createNotebook = notebook => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/notebooks`,
        data: {
            notebook
        }
    });
};

export const updateNotebook = notebook => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notebooks/${notebook.id}`,
        data: {
            notebook
        }
    });
};

export const deleteNotebook = id => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${id}`,
        
    });
};