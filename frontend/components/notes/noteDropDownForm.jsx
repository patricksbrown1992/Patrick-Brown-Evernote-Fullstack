import React from 'react';

class NoteDropDownForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    }


    handleSubmitDelete(entity) {
        // debugger
        return (e) => {
            e.preventDefault();
            this.props.noteDelete(entity);
        };
    }

    handleSubmitEdit(entity) {
        // debugger
        return (e) => {
            e.preventDefault();
            this.props.noteEdit(entity)
        };
    }

    render() {

        return (
            <div className='note-drop-down-modal'>
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <br />
                <p>{this.props.note.title}</p>
                <br />
                <span onClick={this.handleSubmitDelete(this.props.note)}>
                    <button type='submit'>Delete Note</button>
                </span>
                <br />
                <span onClick={this.handleSubmitEdit(this.props.note)}>
                    <button type='submit'>Edit Note Title</button>
                </span>
                <br />
            </div>
        )
    }
}

export default NoteDropDownForm;