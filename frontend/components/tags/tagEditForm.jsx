import React from 'react';

class TagEditForm extends React.Component{
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
        this.props.updateTag({ name, user_id, id }).then(() => this.props.closeModal());
    }

    render() {

        return (
            <div className="tag-edit-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <h1>Rename tag</h1>
                <h3>Name</h3>
                <span>

                    <input type="text" value={this.state.name} onChange={this.handleChange()} />
                </span>

                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Done</button>
                </form>
            </div>
        )
    }
}

export default TagEditForm;