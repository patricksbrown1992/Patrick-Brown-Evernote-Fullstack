import React from 'react';
class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        return (e) => {
            this.setState({ name: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.name;
        let body = this.props.note.body;
        let notebook_id = this.props.note.notebook_id;
        let id = this.props.note.notebook_id;
        let id2 = this.props.note.id;
        let note = { title, body, notebook_id, id: id2 };
        this.props.updateNote({id, note}).then(() => this.props.closeModal());
    }

    render() {
        if (this.state.name.length < 1){
            return (
                <div className="note-edit-modal">
                    <div className="note-edit-modal-top">
                        <h1>Rename note</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                        
                    </div>
                    <h3>Title</h3>
                    <span>

                        <input type="text" value={this.state.name} onChange={this.handleChange()} />
                    </span>

                    <form>
                        <button className="invalid" type='submit'>Done</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="note-edit-modal">
                    <div className="note-edit-modal-top">
                        <h1>Rename note</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>

                    </div>
                    <h3>Title</h3>
                    <span>
    
                        <input type="text" value={this.state.name} onChange={this.handleChange()} />
                    </span>
    
                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>
                    </form>
                </div>
            )
        }
    }
}


export default NoteEditForm;