import React from 'react';

class TagNewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
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

        this.props.createTag({ name, user_id }).then(() => this.props.closeModal());
    }

    render() {

        return (
            <div className='new-tag-modal'>
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <h1>Create New Tag</h1>
                <h3>Name</h3>
                <span>

                    <input type="text" value={this.state.name} onChange={this.handleChange()} placeholder='Notebook name' />
                </span>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Done</button>
                </form>

            </div>
        )
    }
}

export default TagNewForm;