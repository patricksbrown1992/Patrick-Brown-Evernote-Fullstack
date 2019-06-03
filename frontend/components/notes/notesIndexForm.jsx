import React from 'react';
import { Link } from 'react-router-dom';

class notesIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }
    componentDidMount() {
        // this.props.getNotebooks(this.props.user);
        this.setState({ loaded: true });
    }
    

    render() {
        let notes;
        if (this.state.loaded) {
            notes = this.props.notes.map(note => (
                <li key={note.id}>{note.name}</li>

            ))
        }
        return (

        <div className="center-nav">
            <ul>
                <li className="notebook-title">Notebook Title</li>
                {notes}

            </ul>
        </div>
        )
    }
}

export default notesIndexForm;

