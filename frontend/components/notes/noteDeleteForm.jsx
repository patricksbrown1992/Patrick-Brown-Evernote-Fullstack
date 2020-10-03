import React from 'react';

const NoteDeleteForm = (props) =>  {
    
    function handleSubmitDelete(e){
        
        e.preventDefault();
        props.deleteNote(props.note).then(() => props.closeModal())

    }

    
    return (
        <div className="note-delete-modal">
            <div className = "note-delete-modal-top">
                <h1>Delete Note?</h1>
                <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
            </div>
            <h3>Are you sure you want to delete the "{props.note.title}" note?</h3>

            <form onSubmit={handleSubmitDelete}>
                <button type='submit'>Delete</button>
            </form>
        </div>
    )
    
}

export default NoteDeleteForm;