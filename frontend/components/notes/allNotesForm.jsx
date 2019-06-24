import React from 'react';
import styleDate from '../../util/styleDate';
import LeftNav from '../username/usernameLeftContainer';
import { Link } from 'react-router-dom';
class AllNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false }
    }

    componentDidMount(){
        // debugger
        this.props.clearNotebooks();
        this.props.getNotebooks(this.props.user).then( () => this.props.notebooks.forEach( (notebook) => {
            this.props.getNotes(notebook.id)
        }) );
        // .then( () => this.props.getNotes())
    }

    render() {
        let notes;
        if(this.props.notes.length > 0){
            notes = this.props.notes.map(note => (
                // <li key={note.id} ><Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} > <h1>{note.title}</h1> </Link>
                <li key={note.id} className="all-note-title" ><h1>{note.title}</h1>
                    <h3>{note.body}</h3>

                    Last updated:
                    <br />
                    {styleDate(note.updated_at)}
                    <br />

                    {/* <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button> */}


                </li>
            ));
            return (
    
    
                <div className="all-note-page">
                    <LeftNav />
                    <div className="all-note-right">
                        <div className ="all-note-title">
                            <h1>All Notes</h1>
                        </div>
                        <div className = "all-note-nav">
                            {notes}
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <LeftNav />
                    <h1>Test</h1>
                </>
            )
        }
    }
}
export default AllNoteForm;