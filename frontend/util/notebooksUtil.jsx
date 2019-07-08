export const getNotebooks = (user) => {
    return $.ajax({
        method: 'GET',
        url: '/api/notebooks',
        data: {
            user_id: user.id,
        }
    });      
};

export const getNotebook = id => {
   
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${id}`,
        
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

export const updateNotebook = notebook => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/notebooks/${notebook.id}`,
        data: {
            notebook
        }
    });
};

export const deleteNotebook = notebook => {
    
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${notebook.id}`,
        data: {
            notebook
        }
        
    });
};