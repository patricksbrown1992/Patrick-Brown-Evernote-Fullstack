import React from 'react';
import { Redirect } from 'react-router-dom';

class NotebookDeleteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.deleteNotebook(this.props.notebook)
        .then( () => this.props.notes.forEach( (note) => {
            if(note.notebook_id == this.props.notebook.id){
                this.props.deleteNote(note)
            }
        }))
        .then( () => this.props.closeModal());
        // this.props.closeModal()
        return this.props.history.push('/notebooks');
        // return <Redirect to='/notebooks' />
    }
  

    render() {

        return (
            <div className="notebook-delete-modal">
                <div className="noteboook-delete-top">
                    <h1>Delete Notebook?</h1>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                </div>
                <h3>Are you sure you want to delete the "{this.props.notebook.name}" notebook?</h3>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default NotebookDeleteForm;