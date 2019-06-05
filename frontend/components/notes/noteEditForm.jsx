import React from 'react';
class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        debugger
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const notebook_id = this.props.notebook_id;
        const id = this.props.id;
        const body = this.state.body;
        const note = { title, body, notebook_id, id };
        debugger
        this.props.updateNote({ id, note });
    }

    render() {
        return (
            <div className='edit-note-modal'>
                <h1>Edit Note</h1>

                <h5>Title</h5>
                <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Note Title' />
                <h5>Body</h5>
                <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Note Body' />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Continue</button>

                </form>

            </div>
        )
    }
}
export default NoteEditForm;