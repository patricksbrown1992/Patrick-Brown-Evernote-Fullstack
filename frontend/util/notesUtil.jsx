export const getNotes = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${id}/notes`,
        
    }); 
};

export const getNote = (notebook, note) => {
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${notebook.id}/notes/${note.id}`,
        data: {
            note
        }
    });
};

export const createNote = (id, note) => {
  
    return $.ajax({
        method: 'POST',
        url: `api/notebooks/${id}/notes`,
        data: {
            note
        }
    });
};

export const updateNote = (id, note) => {
 
    return $.ajax({
        method: 'PATCH',
        url: `api/notebooks/${id}/notes/${note.id}`,
        data: {
            note
        }
    });
};


export const deleteNote = (note) => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${note.notebook_id}/notes/${note.id}`,
        
    });
};