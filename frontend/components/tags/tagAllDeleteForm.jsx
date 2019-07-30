import React from 'react';
import { merge } from 'lodash';



class TagAllDeleteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getTaggings(this.props.user)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.closeModal();
        for(let i = 0; i < this.props.taggings.length; i++){
            let tagging = this.props.taggings[i];
            // debugger
            if(tagging.tag_id == this.props.tag.id){
                this.props.deleteTagging(tagging.id)
            }
        }

    }

    render() {

        return (
            <div className="tag-all-delete-modal">
                <div className="tag-delete-modal-top">
                    <h1>Remove Tag?</h1>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                </div>
                <h3>Are you sure you want to remove the "{this.props.tag.name}" tag from all notes? </h3>

                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Remove</button>
                </form>
            </div>
        )
    }
}

export default TagAllDeleteForm;