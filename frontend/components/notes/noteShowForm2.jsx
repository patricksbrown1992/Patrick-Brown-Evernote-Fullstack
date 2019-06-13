import React from 'react';
import ReactQuill from 'react-quill';


class NoteShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.note;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        debugger
        if (newProps.note == undefined){
            return this.props.history.push('/notebooks');
        } 
        if (newProps.note.id !== this.props.note.id) {
            this.setState({
                id: newProps.note.id,
                title: newProps.note.title,
                body: newProps.note.body,
                notebook_id: newProps.note.notebook_id
            });
        }
    }




    handleChange(value) {
        this.setState({ body: value });
    }



    handleSubmit() {

        return (e) => {
            e.preventDefault();
            let title = this.state.title;
            let body = this.state.body;
            let notebook_id = this.state.notebook_id;
            let id = this.state.id;
            let note = { title, body, notebook_id, id };
            this.props.updateNote({ id, note })
            // .then(() => this.setState({body: ''}));
        };
    }

    render() {

        let note = this.props.note;
        debugger
        return (
            <div className="right-nav">

                <h1>{note.title}</h1>
                <br />
                <button onClick={this.handleSubmit()} type='submit'>Edit Body</button>
                <br />
                <br />
                <ReactQuill value={this.state.body} onChange={this.handleChange} />
                <br />
            </div>
        );

    }

}


export default NoteShowForm;