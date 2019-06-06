import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NoteShowForm from '../notes/noteShowContainer2';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };

        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }
    componentDidMount() {
        this.props.getNotes(this.props.notebook.id).then( () => this.setState({loaded: true}));
    }
    componentDidUpdate(prevProps){
        
       
    }

    handleSubmitDelete(note) {
        return (e) => {
            e.preventDefault();
            this.props.deleteNote(note);
        };
    }



    render() {


        let notes;
        
        if (!this.state.loaded) {
           
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
           
            // let theNote;
            // this.props.notes.forEach(note => {
            //     debugger
            //     if (note.id === parseInt(this.props.match.params.note_id)){
            //         theNote = note;
            //     }
            // })
          
            return (
                <>
                    {/* <div className="center-nav"> */}
                    <ul >

                        {notes}

                    </ul>
                    {/* <NoteShowForm note={theNote} /> */}
                    <Route path={`${this.props.match.url}/notes/:note_id`} component={NoteShowForm} />
                    {/* </div> */}
                </>
            )
        }
    }
}

export default withRouter(NotesIndexForm);

