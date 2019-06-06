import React from 'react';
class NotebookEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange() {
   
        return (e) => {
            this.setState({ name: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = this.state.name;
        const user_id = Object.values(this.props.user)[0].id;
       
        const id = this.props.id;
        this.props.updateNotebook({ name, user_id, id }).then(() => this.props.closeModal());
    }

    render (){
       
        return(
            <div className="notebook-edit-modal">
                <h1>Rename notebook</h1>
                <h3>Name</h3>
                <span>

                    <input type="text" value={this.state.name} onChange={this.handleChange()}
                    //  placeholder='Notebook name'  GET THE ORIGINAL NAME
                    />
                </span>

                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Continue</button>
                </form>
            </div>
        )
    }
}



export default NotebookEditForm;