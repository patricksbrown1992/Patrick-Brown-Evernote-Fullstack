import React from 'react';
import NoteIndexContainer from '../notes/notesIndexContainer';
import LeftNav from '../username/usernameLeftContainer';
import NoteShowForm from '../notes/noteShowForm';
class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        debugger
        this.props.clearNotes();
        debugger

    }

    handleSubmit(e) {
        debugger
        e.preventDefault();

        this.props.deleteNotebook(theNotebook.id);

    }

    render() {
        let theNotebook;
        this.props.notebooks.forEach(notebook => {
            if(this.props.id){
                if (notebook.id === this.props.id) {
                    theNotebook = notebook;
                }
            } else if (this.props.match.params.notebook_id) {
                if (notebook.id === parseInt(this.props.match.params.notebook_id)) {
                theNotebook = notebook;

                }
            } else {
                theNotebook = undefined;
            }
        });
        // debugger
        // theNotebook = this.props.notebooks[this.props.id];
        // debugger
        // theNotebook = this.props.notebooks[parseInt(this.props.match.params.notebook_id)];
        // debugger

        
        if (!theNotebook) {
            debugger
            return null;
        } else {
            debugger

            return (
                <>
                    <div className ='username-form'>

                        <LeftNav notebook={theNotebook}/>
                        <div className="notebooks-index-main">
                            <div className="notebook-show">
                                <div className='notebook-show-title'>
                                    <h1>{theNotebook.name}</h1>
                                    <form onSubmit={this.handleSubmit}>
                                        <button type='submit'>Delete Notebook</button>
                                    </form>
                                </div>

                            <NoteIndexContainer notebook={theNotebook} />   
                            </div>
                        </div>
                        <NoteShowForm />
                    </div>
                </>

            )
        }
    }

}

export default NotebookShowForm;