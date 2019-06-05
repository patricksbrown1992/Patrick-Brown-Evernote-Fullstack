import React from 'react';


class NoteNewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: '', body: ''};
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
        const notebook_id = this.props.id;
        const body = this.state.body;
        const note = {title, body};
        debugger
        this.props.createNote({notebook_id, note});
    }


       
    render(){
    return (
        <div className='new-note-modal'>
            <h1>Create new Note</h1>
           
            <h5>Title</h5>
            <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Note Title' />
            <h5>Body</h5>
            <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Note Body' />
            <button onSubmit={this.handleSubmit} type='submit'>Continue</button>

        </div>
        )
    }
}

export default NoteNewForm;