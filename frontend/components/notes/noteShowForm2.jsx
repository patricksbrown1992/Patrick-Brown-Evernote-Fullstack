import React from 'react';
import ReactQuill from 'react-quill';


class NoteShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: '' };
        this.handleChange = this.handleChange.bind(this);
       
    }

   
    handleChange(value) {
        this.setState({ body: value });
    }

  
    handleSubmit() {
        
        return (e) => {
            e.preventDefault();
            let title = this.props.note.title;
            let body = this.state.body;
            let notebook_id = this.props.note.notebook_id;
            let id = this.props.note.id;
            let note = { title, body, notebook_id, id };
            this.props.updateNote({ id, note }).then(() => this.setState({body: ''}));
        };
    }

    render() {
       
        let note = this.props.note;

        return (
            <div className="right-nav">

                <h1>{note.title}</h1>
                <br/>
                <button onClick={this.handleSubmit()} type='submit'>Edit Body</button>
                <br/>
                <br/>
                <ReactQuill  value={this.state.body} onChange={this.handleChange} />
                <br />
            </div>
        );
     
    }

}


export default NoteShowForm;