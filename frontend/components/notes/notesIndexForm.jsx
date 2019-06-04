import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook.id);
        // debugger
    

    }
    

    render() {
    //   debugger
        
        let notes;
        if(!this.props.notes){
            return null;
        } else {

        
        
            notes = this.props.notes.map(note =>(
                <div className = "note-index-item">

                    <li className = "note-index-title" key={note.id}>{note.title}</li>
                    <li className = 'note-index-body'>{note.body}</li>
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

