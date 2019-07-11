import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer2';
import {  Redirect } from 'react-router-dom';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
        // this.onMount = this.onMount.bind(this);
       
    }

    componentDidMount() {
        debugger
        this.props.clearNotes();
        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
    }

    componentDidUpdate(prevProps){
        debugger
        if (prevProps.match.params.notebook_id !== this.props.match.params.notebook_id){
            this.props.clearNotes();
            this.props.getNotebooks(this.props.user).then(() => this.props.getNotes(parseInt(this.props.match.params.notebook_id))).then( () => this.setState({ loaded: true }));
            // this.props.getNotebooks(this.props.user).then(() => this.props.notebooks.forEach((notebook) => {
            //     this.props.getNotes(notebook.id)
            // }));
        }
    }
    // componentWillReceiveProps(newProps){
    //     debugger
    //     this.setState({ loaded: false })
    //     this.props.clearNotes()
    //     this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
    // }

    
    handleSubmitDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.notebookDropDown(entity)
        };
    }
    

    // handleSubmit(e) {
      
    //     e.preventDefault();
        

    //     // debugger
    //     this.props.deleteNotebook().then(() => {
    //     // debugger
    //         return this.props.history.push('/notebooks');
    //     });
    // }

    render() {
        // this.onMount();
        if (this.props.search.length > 0) {
            return <Redirect to='/allnotes' />;
        } else {
  
            let theNotebook;
            theNotebook = this.props.notebooks[this.props.match.params.notebook_id];
            
            if (!this.state.loaded) {
                return null;
            }
            return (
                <>
                    <div className='username-form'>

                        <LeftNav notebook={theNotebook} />

                        <div className="notebook-show">
                            <div className='notebook-show-title'>
                                <h1>{theNotebook.name}</h1>
                                <i onClick={this.handleSubmitDropDown(this.props.notebooks[this.props.match.params.notebook_id])} className="fas fa-ellipsis-h"></i>
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