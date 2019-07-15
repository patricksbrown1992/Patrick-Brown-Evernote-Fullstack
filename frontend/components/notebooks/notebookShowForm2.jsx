import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer2';
import {  Redirect } from 'react-router-dom';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
        this.handleTagModal = this.handleTagModal.bind(this);
       
    }

    componentDidMount() {
        this.props.clearNotes();
        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.notebook_id !== this.props.match.params.notebook_id){
            this.props.clearNotes();
            this.props.getNotebooks(this.props.user).then(() => this.props.getNotes(parseInt(this.props.match.params.notebook_id))).then( () => this.setState({ loaded: true }));
            // this.props.getNotebooks(this.props.user).then(() => this.props.notebooks.forEach((notebook) => {
            //     this.props.getNotes(notebook.id)
            // }));
        }
    }
    
    handleSubmitDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.notebookDropDown(entity)
        };
    }
    

    handleTagModal(){
        return (e) => {
            e.preventDefault();
            this.props.tagSearchDropDown()
        }
    }

    render() {
        if (this.props.search.length > 0) {
            return <Redirect to='/allnotes' />;
        } else {
  
            let theNotebook;
            theNotebook = this.props.notebooks[this.props.match.params.notebook_id];
            
            if (!this.state.loaded) {
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
                                <div className="notebook-show-bottom">
                                    <i onClick={this.handleTagModal()} className="fas fa-tag"></i>
                                    <i onClick={this.handleSubmitDropDown(this.props.notebooks[this.props.match.params.notebook_id])} className="fas fa-ellipsis-h move-left"></i>
                                </div>
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