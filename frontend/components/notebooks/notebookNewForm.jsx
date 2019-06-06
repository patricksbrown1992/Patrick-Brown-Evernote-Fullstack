import React from 'react'; 


class NotebookNewForm extends React.Component {

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

    handleSubmit(e){
        e.preventDefault();
        const name = this.state.name;
        const user_id = Object.values(this.props.user)[0].id;
       
        this.props.createNotebook({name, user_id}).then( () => this.props.closeModal());
    }
    

    render (){
        
        return(
        <div className='new-notebook-modal'>
            <h1>Create new notebook</h1>
                <h3>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</h3>
                <h5>Name</h5>
                <span>

                    <input type="text" value={this.state.name} onChange={this.handleChange()} placeholder='Notebook name'/>
                </span>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Continue</button>
                </form>
        </div>
        )
    }
}


export default NotebookNewForm;