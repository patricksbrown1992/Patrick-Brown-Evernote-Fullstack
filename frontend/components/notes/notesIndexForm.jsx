import React from 'react';
import { Link } from 'react-router-dom';
import NoteShowForm from '../notes/noteShowContainer';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitNoteDropDown = this.handleSubmitNoteDropDown.bind(this);
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook.id).then(() => this.setState({ loaded: true }));
       
    }

    

    handleSubmitNoteDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }
    
    

    render() {
    
        
        let notes;
        if(!this.state.loaded){
            return null;
        } else {
            notes = this.props.notes.map(note =>(
                
               
                    
                    <li key={note.id} className="note-index-title" >
                       
                    <Link to={`/username/${this.props.notebook.id}/notes/${note.id}`}><h1>{note.title}</h1></Link> 
                    <Link to={`/username/${this.props.notebook.id}/notes/${note.id}`}><h3>{note.body}</h3></Link>   
                
                       
                    {/* <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button> */}
                    <i onClick={this.handleSubmitNoteDropDown(note)} className="fas fa-ellipsis-h"></i>
                    
                      
                        
                    </li>
                    
              
                
            ));
        
       
        return (
        <>
            {/* <div className="center-nav"> */}
                <ul >
                
                    {notes}

                </ul>
                <NoteShowForm notebook={this.props.notebook}/>
            {/* </div> */}
        </>
        )
        }
    }
}

export default NotesIndexForm;

