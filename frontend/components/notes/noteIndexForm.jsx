import React from 'react';
import { Link, Route, withRouter, Redirect } from 'react-router-dom';
import NoteShowForm from '../notes/noteShowContainer';
import styleDate from '../../util/styleDate';
import { merge } from 'lodash';


class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitNoteDropDown = this.handleSubmitNoteDropDown.bind(this);
        this.onlyCorrectNotes = this.onlyCorrectNotes.bind(this);
        this.triageNotes = this.triageNotes.bind(this);
    }
    componentDidMount() {
       
        this.props.clearTaggings();
        this.props.getNotes(this.props.notebook.id).then(() => this.props.getTaggings(this.props.user)).then(() => this.setState({ loaded: true }));
    }

    // componentDidUpdate(prevProps) {

    //     if(prevProps.notes.length !== this.props.notes.length || prevProps.match.params.notebook_id !== this.props.match.params.notebook_id){
    //         this.onlyCorrectNotes(this.props.notes)
    //     }

    // }
    componentWillUnmount() {
        this.props.removeTriage();
    }

    onlyCorrectNotes(notes){
        let ans = [];
        for(let i = 0; i < notes.length; i++){
            if (notes[i].notebook_id == parseInt(this.props.match.params.notebook_id)){
                let newObject = merge({}, notes[i]);
               
                ans.push(newObject);
            }
        }
        return ans;
    }


    handleSubmitNoteDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }

    triageNotes(notes){
        let ans = [];
        let triage = this.props.triage[0];
        for(let i = 0; i < notes.length; i++){
            let note = notes[i];
           
            for(let j = 0; j < this.props.taggings.length; j++){
                let tagging = this.props.taggings[j];
                if(note.id == tagging.note_id && tagging.tag_id === triage.id){
                    let newObject = merge({}, note);
                   
                    ans.push(newObject);
                }
            }
        }
        return ans;
    }



    render() {
        if(this.props.search.length > 0){
            return <Redirect to='/allnotes'/>;
        } else {
            
            if (!this.state.loaded) {
                return null;
            } else {
               
                let notes = this.onlyCorrectNotes(this.props.notes);
                if(this.props.triage.length > 0){
                    notes = this.triageNotes(notes);
                }
                notes = notes.map(note => (
                    <li key={note.id} className="note-index-title" ><Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} > <h1>{note.title}</h1> </Link>
                        <Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} > <h3>{note.body.replace(/(<([^>]+)>)/ig, "")}</h3> </Link>
                        
                        <br/>
                        <h3>Last updated:</h3>
                      
                        <h3>{styleDate(note.updated_at)}</h3>
                        <br />
    
                        {/* <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button> */}
                        <i onClick={this.handleSubmitNoteDropDown(note)} className="fas fa-ellipsis-h"></i>
    
    
                    </li>
                ));
                // if (this.props.taggings.length > 0){
                //     notes = notes.filter(note => (
                        
                //     ))
                // }
                return (
                    <>
                        <ul>
                            {notes}
                        </ul>
                        <Route path={`${this.props.match.url}/notes/:note_id`} component={NoteShowForm} />
                    </>
                )
            }
        }
        
    }
}
export default withRouter(NotesIndexForm);