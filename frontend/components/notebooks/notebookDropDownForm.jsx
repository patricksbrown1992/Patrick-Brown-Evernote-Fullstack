import React from 'react';

class NotebookDropDownForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    }
    handleSubmitDelete(e) {
        e.preventDefault();
        this.props.notebookDeleteModal(this.props.notebook).then(() => this.props.closeModal());
        // debugger
        
    }

    handleSubmitEdit(e){
        e.preventDefault();
        this.props.editModal(this.props.notebook).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div className='notebook-drop-down-modal'>
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <span>
                    <button type='submit'>Delete Notebook</button>
                </span>
                <br/>
                <span>
                    <button type='submit'>Edit Notebook Name</button>
                </span>
                <br />
            </div>
        )
    }
}

export default NotebookDropDownForm;