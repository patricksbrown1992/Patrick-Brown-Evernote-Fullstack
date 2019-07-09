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
        const user_id = this.props.user.id
        const id = this.props.id;
        this.props.updateNotebook({ name, user_id, id }).then(() => this.props.closeModal());
    }

    render (){
        if (this.state.name.length < 1){
            // non-working button to prevent empty submissions
            return (
                <div className="notebook-edit-modal">
                    <div className="notebook-edit-top">
                        <h1>Rename notebook</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Name</h3>
                    <span>

                        <input type="text" value={this.state.name} onChange={this.handleChange()} />
                    </span>

                    <form>
                        <button className="invalid"type='submit'>Done</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="notebook-edit-modal">
                    <div className="notebook-edit-top">
                        <h1>Rename notebook</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Name</h3>
                    <span>
    
                        <input type="text" value={this.state.name} onChange={this.handleChange()}/>
                    </span>
    
                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>
                    </form>
                </div>
            )
        }
    }
}



export default NotebookEditForm;