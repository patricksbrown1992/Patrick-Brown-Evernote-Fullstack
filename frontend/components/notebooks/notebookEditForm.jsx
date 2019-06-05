import React from 'react';
class NotebookEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange() {
        debugger
        return (e) => {
            this.setState({ name: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = this.state.name;
        const user_id = Object.values(this.props.user)[0].id;
        // get an id and pass that in
        // debugger
        const id = this.props.id;
        this.props.updateNotebook({ name, user_id, id });
    }

    render (){
        debugger
        // console.log({this.state.name});
        return(
            <div>
                <h1>Rename notebook</h1>
                <h3>Name</h3>
                <input type="text" value={this.state.name} onChange={this.handleChange()}
                //  placeholder='Notebook name'  GET THE ORIGINAL NAME
                 />

                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Continue</button>
                </form>
            </div>
        )
    }
}



export default NotebookEditForm;