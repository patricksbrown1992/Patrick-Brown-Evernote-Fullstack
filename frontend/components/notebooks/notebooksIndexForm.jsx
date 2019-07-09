import React from 'react';
import UsernameFormLeft from '../username/nonNoteLeftContainer';
// import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { Route, Link } from 'react-router-dom';
// import NotebookShowForm from './notebookShowContainer2';

import styleDate from '../../util/styleDate';

class NotebooksIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, selected: false, body: '', title: false};
        this.updateSelected = this.updateSelected.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitNoteDropDown = this.handleSubmitNoteDropDown.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleSortNotes = this.handleSortNotes.bind(this);

    }


    componentDidMount() {
        this.props.getNotebooks(this.props.user);
    }

    handleSubmitAdd(e) {
        e.preventDefault();

        this.props.addModal();
    }
    

    handleChange() {
      
        return (e) => {
            this.setState({ body: e.target.value }, () => this.props.notebooks.filter(notebook => {
                notebook.name.includes(this.state.body)     
            })) 
        }
       
    }

    handleTitleClick(){
        this.setState({ title: !this.state.title }, () => this.handleSort(this.props.notebooks));
    }

    handleSort(notebooks){
        // debugger
        let newNotebooks = this.duplicateArray(notebooks);
        if(this.state.title === true){
            let sorted = false;
            // debugger
            while (!sorted) {
                sorted = true;
                // bubble sort
                for (let i = 0; i < newNotebooks.length - 1; i++) {
                    let current = newNotebooks[i];
                    let next = newNotebooks[i + 1];
                    if (current.name.toUpperCase() < next.name.toUpperCase()) {
                        // Swaps if first element is before the second in alphabet
                        sorted = false;
                        [newNotebooks[i], newNotebooks[i + 1]] = [newNotebooks[i + 1], newNotebooks[i]]
                    }
                }
            }
            return newNotebooks;

            // this.state.title = 'up';
        } else {
            
            
            let sorted = false;
            // debugger
            while (!sorted) {
                sorted = true;
                // bubble sort
                for (let i = 0; i < newNotebooks.length - 1; i++) {
                    let current = newNotebooks[i];
                    let next = newNotebooks[i + 1];
                    if (current.name.toUpperCase() > next.name.toUpperCase()) {
                        // Swaps if first element is after the second in alphabet
                        sorted = false;
                        [newNotebooks[i], newNotebooks[i + 1]] = [newNotebooks[i + 1], newNotebooks[i]]
                    }
                }
            }
            return newNotebooks;
            // this.state.title = 'down';
        }
    }

    handleSortNotes(notes){
        let newNotes = this.duplicateArray(notes);
        if (this.state.title === true) {
            
            let sorted = false;
            // debugger
            while (!sorted) {
                sorted = true;
                // bubble sort
                for (let i = 0; i < newNotes.length - 1; i++) {
                    let current = newNotes[i];
                    let next = newNotes[i + 1];
                    if (current.title.toUpperCase() < next.title.toUpperCase()) {
                        // Swaps if first element is before the second in alphabet
                        sorted = false;
                        [newNotes[i], newNotes[i + 1]] = [newNotes[i + 1], newNotes[i]]
                    }
                }
            }
            return newNotes;

            // this.state.title = 'up';
        } else {

            
            let sorted = false;
            // debugger
            while (!sorted) {
                sorted = true;
                // bubble sort
                for (let i = 0; i < newNotes.length - 1; i++) {
                    let current = newNotes[i];
                    let next = newNotes[i + 1];
                    if (current.title.toUpperCase() > next.title.toUpperCase()) {
                        // Swaps if first element is after the second in alphabet
                        sorted = false;
                        [newNotes[i], newNotes[i + 1]] = [newNotes[i + 1], newNotes[i]]
                    }
                }
            }
            return newNotes;
            // this.state.title = 'down';
        }
    }

    duplicateArray(array){
        // deep dupes objects
        let ans = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }
        // debugger
        return ans;
    }

    handleSubmitDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.notebookDropDown(entity)
        };
    }

    handleSubmitNoteDropDown(entity){
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }


    updateSelected(id) {
        // debugger
        if(this.state.selected && this.state.selected === id){
            return () => {
                this.props.clearNotes();
                this.setState({ selected: false })
            };
        } else {
            return () => {
                this.props.clearNotes();
                this.setState({ selected: id }, () => this.props.getNotes(this.state.selected));
            };
        }

        }

    render() {
        
        let notebooks;
        let caret;
        let arrow;
        if (this.props.notebooks.length < 1) {
            return (
                <div className='notebooks-index'>

                    <UsernameFormLeft />

                    <div className='notebooks-index-right'>
                        <div className="notebook-index-top-div">
                            <div className="notebook-index-top">
                                <h1>Notebooks</h1>
                                <input placeholder='Find Notebooks...' type="text" onChange={this.handleChange} />
                            </div>
                            <div className="notebook-index-header2">


                                <h3>My notebook list</h3>
                                <form onSubmit={this.handleSubmitAdd}>

                                    <button className='new-notebook-button' type='submit'><i className="fas fa-book-medical"></i>New Notebook</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            );
        } else {
            notebooks = this.handleSort(this.props.notebooks);
            // debugger
            notebooks = notebooks.map(notebook => {
                let selectedNotebook;
                let notes;
                
                if(notebook.id === this.state.selected){
                    selectedNotebook = 'selectedNotebook';
                    caret = "fas fa-caret-down";
                    notes = this.handleSortNotes(this.props.notes)
                    notes = notes.map(note => (

                        <li key={note.id} className="notebook-note-index-item">
                            <div className="notebook-index-note-title"><i className="fas fa-sticky-note"></i><Link to={`/username/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link></div>
                            <div className="notebook-index-note-email"><h4>{this.props.user.email}</h4></div>
                            <div className="notebook-index-note-time"><h4>{styleDate(note.updated_at)}</h4></div>
                            {/* <div className="notebook-index-table-button"><button onClick={this.handleSubmitEdit(notebook)} type='submit'><i className="fas fa-ellipsis-h"></i>Rename Notebook</button></div> */}
                            <div className="notebook-index-note-button"><i onClick={this.handleSubmitNoteDropDown(note)} className="fas fa-ellipsis-h"></i></div>
                            {/* <i class="fas fa-caret-down"></i> */}


                        </li>
                    ));
                } else {
                    selectedNotebook = 'notebook-index-table';
                    notes = '';
                    caret = "fas fa-caret-right";
                    // debugger
                }
                if(this.state.title){
                    arrow = "fas fa-arrow-up"
                } else {
                    arrow = "fas fa-arrow-down"
                }

                return (
                   <div>
                        <li key={notebook.id} className={selectedNotebook} >
                            <div className="notebook-index-table-title"> <i onClick={this.updateSelected(notebook.id)} className={caret}></i> <Link to={`/username/${notebook.id}`} ><i className="fas fa-book"></i>{notebook.name}</Link></div>
                            <div className="notebook-index-table-email"><h4>{this.props.user.email}</h4></div>
                            <div className="notebook-index-table-time"><h4>{styleDate(notebook.updated_at)}</h4></div>
                            {/* <div className="notebook-index-table-button"><button onClick={this.handleSubmitEdit(notebook)} type='submit'><i className="fas fa-ellipsis-h"></i>Rename Notebook</button></div> */}
                            <div className="notebook-index-table-button"><i onClick={this.handleSubmitDropDown(notebook)} className="fas fa-ellipsis-h"></i></div>
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
                        <div className= "notebook-index-top-div">
                            <div className="notebook-index-top">
                                <h1>Notebooks</h1>
                                <input placeholder='Find Notebooks...' type="text" onChange={this.handleChange}/>
                            </div>
                            <div className="notebook-index-header2">
                            
                            
                                <h3>My notebook list</h3>
                                <form onSubmit={this.handleSubmitAdd}>

                                    <button className='new-notebook-button' type='submit'><i className="fas fa-book-medical"></i>New Notebook</button>
                                </form>
                            </div>

                        </div>
                        <div className='index-of-notebooks'>
                            <div className='notebook-table-labs'>
                                <h6 onClick={this.handleTitleClick} className="notebook-table-label-title">Title <i className={arrow}></i></h6>
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