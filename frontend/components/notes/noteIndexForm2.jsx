import React from 'react';
import { Link } from 'react-router-dom';
import NoteShowForm from '../notes/noteShowContainer';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };

        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook.id)

    }

    handleSubmitDelete(note) {
        return (e) => {
            e.preventDefault();
            this.props.deleteNote(note);
        };
    }



    render() {


        let notes;
        debugger
        if (this.props.notes.length < 1) {
            debugger
            return null;
        } else {
            
            notes = this.props.notes.map(note => (
                <li key={note.id} className="note-index-title" ><Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} >{note.title}</Link>
                    <br />
                    {note.body}
                    <br />
                    <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button>
                    <br />
                    <p>-------------------</p>
                </li>
            ));
            if (!notes) {
                debugger
                return null;
            }
            let note;
            this.props.notes.forEach(note => {
                debugger
                if (note.id === parseInt(this.props.match.params.note_id)){
                    note = note;
                }
            })
            if(!note){
                return null;
            }

            return (
                <>
                    {/* <div className="center-nav"> */}
                    <ul >

                        {notes}

                    </ul>
                    <NoteShowForm note={note} />
                    {/* </div> */}
                </>
            )
        }
    }
}

export default NotesIndexForm;

