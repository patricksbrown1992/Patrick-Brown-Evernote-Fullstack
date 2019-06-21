import React from 'react';

class NoteDeleteForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }


    handleSubmitDelete(e){
        
        e.preventDefault();
        this.props.deleteNote(this.props.note).then(() => this.props.closeModal())

    }

    render(){
        return (
            <div className="note-delete-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <h1>Delete Note?</h1>
                <h3>Are you sure you want to delete the "{this.props.note.title}" note?</h3>

                <form onSubmit={this.handleSubmitDelete}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default NoteDeleteForm;