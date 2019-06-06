import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer2';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true })).then(() => this.props.clearNotes());


    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        let notebook;
       
        this.props.notebooks.forEach(notebook => {
            
            if (notebook.id === parseInt(this.props.match.params.notebook_id)) {
                notebook = notebook;
            }
        });

        debugger
        this.props.deleteNotebook(notebook).then(() => {
            debugger
            return this.props.history.push('/notebooks')
        });
    }

    render() {
        let theNotebook;
        this.props.notebooks.forEach(notebook => {

            debugger
            if (notebook.id === parseInt(this.props.match.params.notebook_id)) {
                theNotebook = notebook;
            }
    
        });

    
        debugger

        if (!this.state.loaded) {
            debugger
            return null;
        } else {
            debugger
            if (!theNotebook) {
                debugger
                return null;
            }
            debugger
            
            return (
                <>
                    <div className='username-form'>

                        <LeftNav notebook={theNotebook} />

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
                </>

            )
        }
    }

}

export default NotebookShowForm;