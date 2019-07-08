import React from 'react';

class NoteDropDownForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitShortcut = this.handleSubmitShortcut.bind(this);
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

    handleSubmitShortcut(entity){
        return(e) => {
            e.preventDefault();
            let title = entity.title;
            let body = entity.body;
            let notebook_id = entity.notebook_id;
            let id = entity.notebook_id;
            let id2 = entity.id;
            let shortcut = !entity.shortcut;
            let note = { title, body, notebook_id, id: id2, shortcut };
            this.props.closeModal();
            this.props.updateNote({ id, note })


        }
    }

    render() {
        debugger
        if(this.props.note.shortcut){
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
                    <br/>
                    <span onClick={this.handleSubmitShortcut(this.props.note)}>
                        <button type='submit'>Remove from Shortcuts</button>
                    </span>
                    <br/>
                </div>
            )

        } else {

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
                    <br/>
                    <span onClick={this.handleSubmitShortcut(this.props.note)}>
                        <button type='submits'>Add to Shortcuts</button>
                    </span>
                    <br />
                </div>
            )
        }

    }
}

export default NoteDropDownForm;