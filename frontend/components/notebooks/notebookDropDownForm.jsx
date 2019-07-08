import React from 'react';

class NotebookDropDownForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitShortcut = this.handleSubmitShortcut.bind(this);
    }
  

    handleSubmitDelete(entity) {
        // debugger
        return (e) => {
            e.preventDefault();
            this.props.notebookDelete(entity);
        };
    };
    handleSubmitEdit(entity) {
        // debugger
        return (e) => {
            e.preventDefault();
            this.props.editModal(entity);
        };
    };
    handleSubmitShortcut(entity){
        return(e) => {
            e.preventDefault();
            const name = entity.name;
            const user_id = entity.user_id;
            const shortcut = !entity.shortcut;
            const id = entity.id;
            this.props.closeModal();
            this.props.updateNotebook({id: id, name: name, user_id: user_id, shortcut: shortcut})
        };
    };

    render() {
        if(this.props.notebook.shortcut){
            return (
                <div className='notebook-drop-down-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <br />
                    <p>{this.props.notebook.name}</p>
                    <br />
                    <span onClick={this.handleSubmitDelete(this.props.notebook)}>
                        <button type='submit'>Delete Notebook</button>
                    </span>
                    <br />
                    <span onClick={this.handleSubmitEdit(this.props.notebook)}>
                        <button type='submit'>Edit Notebook Name</button>
                    </span>
                    <br/>
                    <span onClick={this.handleSubmitShortcut(this.props.notebook)}>
                        <button type='submit'>Remove from Shortcuts</button>
                    </span>
                    <br />
                </div>
            )

        } else {
            return (
                <div className='notebook-drop-down-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <br/>
                    <p>{this.props.notebook.name}</p>
                    <br/>
                    <span onClick={this.handleSubmitDelete(this.props.notebook)}>
                        <button type='submit'>Delete Notebook</button>
                    </span>
                    <br/>
                    <span onClick={this.handleSubmitEdit(this.props.notebook)}>
                        <button type='submit'>Edit Notebook Name</button>
                    </span>
                    
                    <br/>
                    <span onClick={this.handleSubmitShortcut(this.props.notebook)}>
                        <button type='submits'>Add to Shortcuts</button>
                    </span>
                    <br />
                </div>
            )

        }
    }
}

export default NotebookDropDownForm;