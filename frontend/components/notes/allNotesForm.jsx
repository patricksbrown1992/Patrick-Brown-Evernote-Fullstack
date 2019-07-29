import React from 'react';
import styleDate from '../../util/styleDate';
import LeftNav from '../username/nonNoteLeftContainer';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
class AllNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false }
        this.duplicateArray = this.duplicateArray.bind(this);
        this.handleSubmitNoteDropDown = this.handleSubmitNoteDropDown.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.clearNotebooks();
        this.props.getNotebooks(this.props.user).then( () => this.props.notebooks.forEach( (notebook) => {
            this.props.getNotes(notebook.id)
        }) );
        // .then( () => this.props.getNotes())
    }

    handleSubmitNoteDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }
    componentWillUnmount() {
        this.props.removeTriage();
    }


    duplicateArray(array) {
        // deep dupes objects
        let ans = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }
        return ans;
    }


    render() {
        let notes;
        if(this.props.notes.length > 0){
            notes = this.duplicateArray(this.props.notes);
            notes = notes.filter(note => (
                note.title.toUpperCase().includes(this.props.search.toUpperCase()))
            )   
            notes = notes.map(note => (
                <li key={note.id} className="all-note-title"><Link to={`/username/${note.notebook_id}/notes/${note.id}`} > <h1>{note.title}</h1> </Link>
                    <Link to={`/username/${note.notebook_id}/notes/${note.id}`} > <h3>{note.body.replace(/(<([^>]+)>)/ig, "")}</h3></Link>
                    
                    

                    Last updated:
                    <br />
                    {styleDate(note.updated_at)}
                    <br />

                    <i onClick={this.handleSubmitNoteDropDown(note)} className="fas fa-ellipsis-h"></i>


                </li>
            ));
            return (
    
    
                <div className="all-note-page">
                    <LeftNav />
                    <div className="all-note-right">
                        <div className ="all-note-title">
                            <h1>All Notes</h1>
                            <h3>{this.props.notes.length} notes</h3>
                        </div>
                        <div className = "all-note-nav">
                            {notes}
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="all-note-page">
                    <LeftNav />
                    <div className="all-note-right">
                        <div className="all-note-title">
                            <h1>No Notes</h1>
                        </div>

                    </div>
                </div>
            )
        }
    }
}
export default AllNoteForm;