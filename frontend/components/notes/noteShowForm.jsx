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
                showtagbutton = <button className='add-tag-on-note-button' onClick={this.handleAddTag}>Add Tag</button>
            }

            let modules = {
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['image']
                ],
            };

            let formats = [
                'header',
                'bold', 'italic', 'underline', 'list', 'bullet', 
                'indent', 'strike', 'blockquote',
                'link', 'image'
            ];
            return (

                <>
                
                    <div className="right-nav">
                        <div className='note-title-top'>
                            <h1>{note.title}</h1>
                            {showtagbutton}

                        </div>
                    </div>
                    <ReactQuill className={'react-quill-element'} 
                    value={this.state.body} 
                    formats={formats} 
                    modules={modules} 
                    onChange={this.handleChange} 
                    theme="snow" />


                </>
                    
 
            );
        }
    }

}


export default NoteShowForm;