import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer';
import {  Redirect } from 'react-router-dom';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
        this.handleTagModal = this.handleTagModal.bind(this);
        this.handleRemoveTriage = this.handleRemoveTriage.bind(this);
       
    }

    componentDidMount() {
        this.props.clearNotes();
        this.props.getNotebooks(this.props.user).then( () => this.props.getTags(this.props.user)).then(() => this.setState({ loaded: true }));
    }

    componentWillUnmount(){
        this.props.clearTags();
        this.props.removeTriage();
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

    handleRemoveTriage(e){
        e.preventDefault();
        this.props.removeTriage()
    }

    render() {
        if (this.props.search.length > 0) {
            return <Redirect to='/allnotes' />;
        } else {
            
            let theNotebook;
            let showtagbutton;
            let theTag;
            theNotebook = this.props.notebooks[this.props.match.params.notebook_id];
            
            if (!this.state.loaded) {
                return null;
            }

            if (this.props.tags.length < 1){
                showtagbutton = ''
            } else {
                showtagbutton = "fas fa-tag"
            }

            if (this.props.triage.length > 0){
                theTag = <button onClick={this.handleRemoveTriage} className="tag-triage-name">{this.props.triage[0].name} x</button>
            } else {
                theTag = ''
            }
            if (!theNotebook){
                return <Redirect to='/notebooks' />;
            }
            return (
                <>
                    <div className='username-form'>

                        <LeftNav notebook={theNotebook} />

                        <div className="notebook-show">
                            <div className='notebook-show-title'>
                                <h1>{theNotebook.name}</h1>
                                <div className="notebook-show-icons">
                                    <div className='tag-triage-div'>
                                        {theTag}
                                    </div>
                                    <div className="notebook-show-bottom">
                                        <i onClick={this.handleTagModal()} className={showtagbutton}></i>
                                        <i onClick={this.handleSubmitDropDown(this.props.notebooks[this.props.match.params.notebook_id])} className="fas fa-ellipsis-h move-left"></i>
                                    </div>
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