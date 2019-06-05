import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook.id).then(() => this.setState({ loaded: true }));
        // debugger
    }

    handleSubmit(note){
        return(e) => {
            e.preventDefault();
            this.props.deleteNote(note);
        };
    }
    
    

    render() {
    //   debugger
        
        let notes;
        if(!this.state.loaded){
            return null;
        } else {
            notes = this.props.notes.map(note =>(
                
                <div className="note-index-item" key={note.id}>
                    
                    <li className = "note-index-title" >{note.title}
                    <br/> 
                    {note.body}
                    </li>
                    <button onClick={this.handleSubmit(note)} type="submit">Delete Note</button>
                </div>
                
            ));
        
       
        return (

        <div className="center-nav">
            <ul >
               
                {notes}

            </ul>
        </div>
        )
        }
    }
}

export default NotesIndexForm;

