import React from 'react';


class NoteNewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: '', body: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        // debugger
        return (e) => { 
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const title = this.state.title;
        const notebook_id = this.props.id;
        const id = this.props.id;
        const body = this.state.body;
        const note = {title, body, notebook_id};
       
        this.props.createNote({id, note}).then( () => this.props.closeModal());
    }


       
    render(){
        if (this.state.title.length < 1 || this.state.body.length < 1){
            return (
                <div className='new-note-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <h1>Create new Note</h1>

                    <h5>Title</h5>
                    <span>
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Note Title' />
                    </span>
                    <h5>Body</h5>
                    <span>
                        <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Note Body' />
                    </span>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <button className="invalid" type='submit'>Done</button>

                    </form>

                </div>
            )
        } else {

            return (
                <div className='new-note-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <h1>Create new Note</h1>
                   
                    <h5>Title</h5>
                    <span>
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Note Title' />
                    </span>
                    <h5>Body</h5>
                    <span>
                        <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Note Body' />
                    </span>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>
        
                    </form>
        
                </div>
                )
        }
    }
}

export default NoteNewForm;