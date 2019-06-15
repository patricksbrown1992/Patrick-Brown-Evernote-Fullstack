import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

class TagIndexForm extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        let tags

        if (this.props.tags.length < 1) {

            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-header">
                        <h1>Tags</h1>
                        <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><i className="fas fa-plus-circle fa-2x"></i><button type='submit'>New Note</button></span>

                    </div>
                </div>
            )
        } else {
            tags = this.props.tags.map(tag => (
                <li key={tag.id}>
                    <div className="tag-index-intial">{tag.name[0]}</div>

                    {tag.name}
                </li>
            ))

            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-right">


                        <div className="tag-index-header">
                            <h1>Tags</h1>
                            <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><i className="fas fa-plus-circle fa-2x"></i><button type='submit'>New Note</button></span>

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