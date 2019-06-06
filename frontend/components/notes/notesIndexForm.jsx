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

        this.props.getNotes(this.props.notebook.id).then(() => this.setState({ loaded: true }));
       
    }

    handleSubmitDelete(note){
        return(e) => {
            e.preventDefault();
            this.props.deleteNote(note);
        };
    }
    
    

    render() {
    
        
        let notes;
        if(!this.state.loaded){
            return null;
        } else {
            notes = this.props.notes.map(note =>(
                
               
                    
                    <li key={note.id} className="note-index-title" ><Link to={`/username/${this.props.notebook.id}/notes/${note.id}`} >{note.title}</Link> 
                        <br/> 
                        {note.body}
                        <br/>
                        <button onClick={this.handleSubmitDelete(note)} type="submit">Delete Note</button>
                        <br/>
                        <p>-------------------</p>
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

