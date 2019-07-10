import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NoteShowForm from '../notes/noteShowContainer2';
import styleDate from '../../util/styleDate';
import { merge } from 'lodash';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitNoteDropDown = this.handleSubmitNoteDropDown.bind(this);
        this.onlyCorrectNotes = this.onlyCorrectNotes.bind(this);
        // this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }
    componentDidMount() {
        this.props.getNotes(this.props.notebook.id).then(() => this.setState({ loaded: true }));
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if(prevProps.notes.length !== this.props.notes.length || prevProps.match.params.notebook_id !== this.props.match.params.notebook_id){
    //         this.onlyCorrectNotes(this.props.notes)
    //     }

    // }

    onlyCorrectNotes(notes){
        let ans = [];
        for(let i = 0; i < notes.length; i++){
            if (notes[i].notebook_id == parseInt(this.props.match.params.notebook_id)){
                let newObject = merge({}, notes[i]);
                debugger
                ans.push(newObject);
            }
        }
        debugger
        return ans;
    }

    // handleSubmitDelete(note) {
    //     return (e) => {
    //         e.preventDefault();
    //         this.props.deleteNote(note);
    //     };
    // }

    handleSubmitNoteDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }



    render() {
        // debugger
        
        if (!this.state.loaded) {
            
            return null;
        } else {
            let notes = this.onlyCorrectNotes(this.props.notes);

            notes = notes.map(note => (
                <li key={note.id} className="note-index-title" ><Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} > <h1>{note.title}</h1> </Link>
                    <Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} > <h3>{note.body}</h3> </Link>
                    

                    Last updated:
                    <br />
                    {styleDate(note.updated_at)}
                    <br />

                    {/* <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button> */}
                    <i onClick={this.handleSubmitNoteDropDown(note)} className="fas fa-ellipsis-h"></i>


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
