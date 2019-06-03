import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }
    componentDidMount() {

        this.props.getNotes(this.props.notebook);
        debugger
        this.setState({ loaded: true });

    }
    

    render() {
      debugger
        
        let notes;
        if(this.state.loaded){
            notes = this.props.notes.map(note =>(
                <li key={note.id}>{note.title}</li>
            ));
        }
        // if (!this.props.notes) {
        //     return null;
        // }
        // debugger
        return (

        <div className="center-nav">
            <ul>
                {/* <li className="notebook-title">Notebook Title</li> */}
                <h3>{notes}</h3>

            </ul>
        </div>
        )
    }
}

export default NotesIndexForm;

