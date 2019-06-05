import React from 'react';
import NoteIndexContainer from '../notes/notesIndexContainer';
import LeftNav from '../username/usernameLeftContainer';
import NoteShowForm from '../notes/noteShowForm';
import { ProtectedRoute } from '../../util/routeUtil';
import { Route, Redirect } from 'react-router-dom';
import NotebooksIndexForm from './notebooksIndexContainer';
class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {loaded: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        debugger
        this.props.getNotebooks(this.props.user).then( () => this.setState({loaded: true})).then(() => this.props.clearNotes());
        debugger

    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        let theNotebook;
        this.props.notebooks.forEach(notebook => {
            if (this.props.match.params.notebook_id) {
                if (notebook.id === parseInt(this.props.match.params.notebook_id)) {
                    theNotebook = notebook;
                }
            } else {
                theNotebook = this.props.notebooks[0];
            }
        });

        debugger
        this.props.deleteNotebook(theNotebook).then(() => {
            debugger
            return this.props.history.push('/notebooks')});
    }

    render() {
        let theNotebook;
        this.props.notebooks.forEach(notebook => {
            if (this.props.match.params.notebook_id) {
                if (notebook.id === parseInt(this.props.match.params.notebook_id)) {
                    theNotebook = notebook;
                }
            } else {
                theNotebook = this.props.notebooks[0];
            }
        });
        
        debugger

        if (!this.state.loaded) {
            debugger
            return null;
        } else {
            debugger
            if(!theNotebook){
                return null;
            }
            return (
                <>
                    <div className='username-form'>

                        <LeftNav notebook={theNotebook} />
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
                        {/* <NoteShowForm /> */}
                    </div>
                </>

            )
        }
    }

}

export default NotebookShowForm;