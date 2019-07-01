import React from 'react';


class TagDropDownForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDeleteTag = this.handleSubmitDeleteTag.bind(this);
        this.handleSubmitEditTag = this.handleSubmitEditTag.bind(this);
    }

    handleSubmitEditTag(entity){
        debugger
        return (e) => {
            e.preventDefault();
            this.props.editTagModal(entity);
        };
    }


    handleSubmitDeleteTag(entity){
        debugger
        return (e) => {
            e.preventDefault();
            this.props.deleteTagModal(entity);
        };
    }

    render(){
        return(
            <div className="tag-drop-down-modal">
                <button onClick={this.handleSubmitDeleteTag(this.props.tag)}>Delete Tag...</button>
                <button onClick={this.handleSubmitEditTag(this.props.tag)}>Rename Tag...</button>
            </div>
        )
    }
}

export default TagDropDownForm;