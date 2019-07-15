import React from 'react';
import ReactQuill from 'react-quill';
import { Redirect } from 'react-router-dom';

class NoteShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            body: this.props.note.body,
            notebook_id: this.props.note.notebook_id,
            id: this.props.note.id,
            change: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
    }

    handleSubmitDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.noteDropDown(entity)
        };
    }

    componentWillReceiveProps(newProps) {
        
        if (newProps.note == undefined) {
            this.setState({change: true})

           
        } else {

            if (newProps.note.id !== this.props.note.id) {
                this.setState({
                    id: newProps.note.id,
                    title: newProps.note.title,
                    body: newProps.note.body,
                    notebook_id: newProps.note.notebook_id
                });
            } 
        }
    }

    handleChange(value) {
        let title = this.state.title;
        let body = value
        let notebook_id = this.state.notebook_id;
        let id = this.state.id;
        let note = { title, body, notebook_id, id };
        this.setState({ body: value }, () => this.props.updateNote({ id, note }));
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
        };
    }

    render() {
        
        if (this.props.search.length > 0) {
            return <Redirect to='/allnotes' />;
        } else {
            if(this.state.change){
                return <Redirect to={`/username/${this.state.notebook_id}`} />
            }
            let note = this.props.note;
    
            return (
                <div className="right-nav">

                    <h1>{note.title}</h1>
                    <br />
                    <br/>
                    {/* <button onClick={this.handleSubmit()} type='submit'>Edit Body</button> */}
                    <br />
                    <br />
                    <ReactQuill value={this.state.body} onChange={this.handleChange} />
                    <br />

                    {/* <button onClick={this.handleAddTag()}>Add Study Tag</button> */}
                    {/* <i onClick={this.handleSubmitDropDown(note)} className="fas fa-ellipsis-h"></i> */}
                </div>
            );
        }
    }

}


export default NoteShowForm;