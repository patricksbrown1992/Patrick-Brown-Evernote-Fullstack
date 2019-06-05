import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
       
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook.id).then(() => this.setState({ loaded: true }));
        // debugger
    

    }
    

    render() {
    //   debugger
        
        let notes;
        if(!this.state.loaded){
            return null;
        } else {

        
        
            notes = this.props.notes.map(note =>(
                <div className = "note-index-item">

                    <li className = "note-index-title" key={note.id}>{note.title}
                    <br/> 
                    {note.body}
                    </li>
                    
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

