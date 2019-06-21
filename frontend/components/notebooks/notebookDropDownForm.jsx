import React from 'react';

class NotebookDropDownForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    }
  

    handleSubmitDelete(entity) {
        return (e) => {
            e.preventDefault();
            this.props.notebookDelete(entity).then(() => this.props.closeModal());
        };
    }

    handleSubmitEdit(entity) {
        return (e) => {
            e.preventDefault();
            this.props.editModal(entity).then(() => this.props.closeModal());
        };
    }

    render() {
        return (
            <div className='notebook-drop-down-modal'>
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <span onClick={this.handleSubmitDelete(this.props.notebook)}>
                    <button type='submit'>Delete Notebook</button>
                </span>
                <br/>
                <span onClick={this.handleSubmitEdit(this.props.notebook)}>
                    <button type='submit'>Edit Notebook Name</button>
                </span>
                <br />
            </div>
        )
    }
}

export default NotebookDropDownForm;