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
        this.handleAddTag = this.handleAddTag.bind(this);
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

    handleAddTag(e){
        e.preventDefault()
        // debugger
        this.props.noteTagAddModal(this.props.match.params.note_id)
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
            let showtagbutton;
            if (this.props.tags.length < 1) {
                showtagbutton = ''
            } else {
                showtagbutton = <button onClick={this.handleAddTag}>Add Tag</button>
            }
            return (
                <div className="right-nav">

                    <h1>{note.title}</h1>
                    <br />
                    <br />
                    {/* <button onClick={this.handleAddTag}>Add Tag</button> */}
                    {showtagbutton}
                    <br/>
                    <ReactQuill value={this.state.body} onChange={this.handleChange} theme="snow" />
                    <br />
                    <br/>
                    <br/>
                    <br/>
                    {/* <i onClick={this.handleSubmitDropDown(note)} className="fas fa-ellipsis-h"></i> */}
                </div>
            );
        }
    }

}


export default NoteShowForm;