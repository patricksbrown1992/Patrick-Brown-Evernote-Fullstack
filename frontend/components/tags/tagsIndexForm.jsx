import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

class TagIndexForm extends React.Component {
    constructor(props) {
        super(props);
        // this.handleSubmitDeleteTag = this.handleSubmitDeleteTag.bind(this);
        this.handleSubmitNewTag = this.handleSubmitNewTag.bind(this);
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
    }

    componentDidMount() {
        this.props.getTags(this.props.user);
    }

    handleSubmitNewTag(entity) {
        return (e) => {
            e.preventDefault();
            this.props.addTag(entity);
        };
    }


    handleSubmitDropDown(entity){
        return(e) => {
            e.preventDefault();
            this.props.tagDropDown(entity);
        }
    }


    render() {
        let tags
        if (this.props.tags.length < 1) {
            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-header">
                        <h1>Tags</h1>
                        <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><i className="fas fa-plus-circle"></i><button type='submit'><p>New Tag</p></button></span>
                        
                    </div>
                </div>
            )
        } else {
            tags = this.props.tags.sort();
            // debugger
            tags = tags.map(tag => (
                <li key={tag.id}>
                    <div className="tag-index-intial">{tag.name[0]}</div>
                    <div className="tag-name">{tag.name}<button onClick={this.handleSubmitDropDown(tag)} className='chevron-down-button'><i class="fas fa-chevron-down"></i></button></div>
                </li>
            ))

            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-right">
                        <div className="tag-index-header">
                            <h1>Tags</h1>
                            <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><button type='submit'><i className="fas fa-plus-circle"></i><p>New Note</p></button></span>
                        </div>
                        <div className="tag-index-list">
                            <ul>{tags}</ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TagIndexForm;