import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
// import { Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
// import NotebookShowForm from './notebookShowContainer2';

import styleDate from '../../util/styleDate';

class NotebooksIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, selected: null, body: ''};
        this.updateSelected = this.updateSelected.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getNotebooks(this.props.user);
    }

    handleSubmitAdd(e) {
        e.preventDefault();

        this.props.addModal();
    }

    activateDropDown() {

    }

    

    handleChange() {
      
        return (e) => {
            this.setState({ body: e.target.value }, () => this.props.notebooks.filter(notebook => {
                notebook.name.includes(this.state.body)     
            })) 
        }
       
    }

    handleSubmitEdit(entity) {
        return (e) => {
            e.preventDefault();
            this.props.editModal(entity);
        };
    }


    updateSelected(id) {
        debugger
        return () => {
            this.setState({ selected: id }, () => this.props.getNotes(this.state.selected));
        };
    }

    render() {
        let dropdownCheck;
        if(!this.state.dropdown){
            dropdownCheck = 'falseDropdown';
        } else {
            dropdownCheck = 'trueDropdown';
        }
        let notebooks;
        if (this.props.notebooks.length < 1) {
            return (
                <div className='notebooks-index'>

                    <UsernameFormLeft />

                    <div className='notebooks-index-right'>
                        <h1>Notebooks</h1>
                        <div className="notebook-index-header2">
                            <h3>My notebook list</h3>
                            
                            <form onSubmit={this.handleSubmitAdd}>

                                <button type='submit' className='new-notebook-button'><i className="fas fa-book-medical"></i>New Notebook</button>

                            </form>
                        </div>
                    </div>
                </div>

            );
        } else {
            notebooks = this.props.notebooks.map(notebook => {
                let selectedNotebook;
                let notes;
                if(notebook.id === this.state.selected){
                    selectedNotebook = 'selectedNotebook';
                    notes = this.props.notes.map(note => (

                        <li key={note.id} className="notebook-note-index-item">
                            <div className="notebook-index-note-title"><i className="fas fa-sticky-note"></i>{note.title}</div>
                            <div className="notebook-index-note-email"><h4>{this.props.user.email}</h4></div>
                            <div className="notebook-index-note-time"><h4>{styleDate(note.updated_at)}</h4></div>
                            {/* <div className="notebook-index-table-button"><button onClick={this.handleSubmitEdit(notebook)} type='submit'><i className="fas fa-ellipsis-h"></i>Rename Notebook</button></div> */}
                            <div className="notebook-index-note-button"><i className="fas fa-ellipsis-h"></i></div>
                            {/* <i class="fas fa-caret-down"></i> */}


                        </li>
                    ));
                } else {
                    selectedNotebook = 'notebook-index-table';
                    notes = '';
                }
                return (
                   <div>
                        <li key={notebook.id} className={selectedNotebook} >
                            <div className="notebook-index-table-title"> <i onClick={this.updateSelected(notebook.id)}className="fas fa-caret-right"></i> <Link to={`/username/${notebook.id}`} ><i className="fas fa-book"></i>{notebook.name}</Link></div>
                            <div className="notebook-index-table-email"><h4>{this.props.user.email}</h4></div>
                            <div className="notebook-index-table-time"><h4>{styleDate(notebook.updated_at)}</h4></div>
                            {/* <div className="notebook-index-table-button"><button onClick={this.handleSubmitEdit(notebook)} type='submit'><i className="fas fa-ellipsis-h"></i>Rename Notebook</button></div> */}
                            <div className="notebook-index-table-button"><i className="fas fa-ellipsis-h"></i></div>
                            {/* <i class="fas fa-caret-down"></i> */}
                        
                        </li>
                        <ul className="notebook-note-index">

                            {notes}
                        </ul>

                   </div>
            )})

            return (

                <div className='notebooks-index'>

                    <UsernameFormLeft />

                    <div className='notebooks-index-right'>
                        <h1>Notebooks</h1>
                        <div className="notebook-index-header2">
                           
                            <input placeholder='Find Notebooks...' type="text" onChange={this.handleChange}/>
                           
                            <h3>My notebook list</h3>
                            <form onSubmit={this.handleSubmitAdd}>

                                <button className='new-notebook-button' type='submit'><i className="fas fa-book-medical"></i>New Notebook</button>
                            </form>
                        </div>
                        <div className='index-of-notebooks'>
                            <div className='notebook-table-labs'>
                                <h6 className="notebook-table-label-title">Title</h6>
                                <h6 className="notebook-table-label-email">Create By</h6>
                                <h6 className="notebook-table-label-time">Updated</h6>
                                <h6 className="notebook-table-label-actions">Actions</h6>
                            </div>
                            {/* <ul className='notebooks-index-list'>{notebooks}</ul> */}
                            <ul>{notebooks}</ul>
                        </div>


                    </div>
                </div>
            );
        }
    }

}

export default NotebooksIndexForm;