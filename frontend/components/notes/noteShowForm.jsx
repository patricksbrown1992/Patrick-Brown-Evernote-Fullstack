import React from 'react';


class NoteShowForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {body: ''};
        this.handleChange = this.handleChange.bind(this);
        // this.state = {selected: 1};
        // this.updateSelected = this.updateSelected.bind(this);
    }
    handleChange() {
        debugger
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    // updateSelected(id) {
    //     return () => {
    //         this.setState({ selected: id });
    //     };
    // }

    handleSubmit(){
        debugger
        return(e) => {
            e.preventDefault();
            let title = this.props.notes[0].title;
            let body = this.state.body;
            let notebook_id = this.props.notes[0].notebook_id;
            let id = this.props.notes[0].id;
            let note = {title, body, notebook_id, id};
            this.props.updateNote({id, note});
        }; 
    }

    render(){
        // let note;
        // debugger
        // if(!note){
        //     note = Object.values(this.props.notes)[0];
        // } else {
            debugger
            let note = this.props.notes[0];

            return (
                <div className="right-nav">
                    
                    <h1>{note.title}</h1>
                    <input type="text" placeholder={note.body} value={this.state.body} onChange={this.handleChange()}/>
                    <br/>
                    <button onClick = {this.handleSubmit()} type='submit'>Edit Body</button>
                </div>
            );
        // }
    }

}


export default NoteShowForm;