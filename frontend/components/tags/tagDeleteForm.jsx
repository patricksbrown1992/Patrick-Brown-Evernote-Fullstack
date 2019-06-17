import React from 'react';

class TagDeleteForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteTag(this.props.tag).then(() => this.props.closeModal());

    }


    render() {

        return (
            <div className="tag-delete-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <h1>Delete Tag?</h1>
                <h3>Are you sure you want to delete the "{this.props.tag.name}" tag? This tag will be removed from all notes.</h3>
             
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default TagDeleteForm;