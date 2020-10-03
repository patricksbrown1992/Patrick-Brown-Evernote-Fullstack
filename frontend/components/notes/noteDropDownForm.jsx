import React from 'react';

const NoteDropDownForm = (props) =>  {
   


    function handleSubmitDelete(e) {
        e.preventDefault();
        props.noteDelete(props.note); 
    }

    function handleSubmitEdit(e) {

        e.preventDefault();
        props.noteEdit(props.note)
      
    }

    function handleSubmitShortcut(e){
      
        e.preventDefault();
        const title = props.note.title;
        const body = props.note.body;
        const notebook_id = props.note.notebook_id;
        const id = props.note.notebook_id;
        const id2 = props.note.id;
        const shortcut = !props.note.shortcut;
        const note = { title, body, notebook_id, id: id2, shortcut };
        props.closeModal();
        props.updateNote({ id, note })
    }



        
    return (
        <div className='note-drop-down-modal'>
            <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
            <br />
            <p>{props.note.title}</p>
            <br />
                <button onClick={handleSubmitDelete} type='submit'>Delete Note</button>
            <br />
                <button onClick={handleSubmitEdit} type='submit'>Edit Note Title</button>
            <br/>
                <button onClick={handleSubmitShortcut} type='submits'>{props.note.shortcut ? 'Remove From Shortcuts' :'Add to Shortcuts'}</button>
            <br />
        </div>
    )
        

    
}

export default NoteDropDownForm;