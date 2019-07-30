import React from 'react';


class TagDropDownForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitDeleteTag = this.handleSubmitDeleteTag.bind(this);
        this.handleSubmitEditTag = this.handleSubmitEditTag.bind(this);
    }

    handleSubmitEditTag(entity){
        
        return (e) => {
            e.preventDefault();
            this.props.editTagModal(entity);
        };
    }


    handleSubmitDeleteTag(entity){
        
        return (e) => {
            e.preventDefault();
            this.props.deleteTagModal(entity);
        };
    }

    render(){
        return(
            <div className="tag-drop-down-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <div className = "tag-drop-down-buttons">
                    <br/>
                    <span onClick={this.handleSubmitDeleteTag(this.props.tag)}>
                        <button type="submit">Delete Tag...</button>
                    </span>
                    <br/>
                    <span onClick={this.handleSubmitEditTag(this.props.tag)}>
                        <button >Rename Tag...</button>
                    </span>

                </div>
            </div>
        )
    }
}

export default TagDropDownForm;