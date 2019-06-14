import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

class TagIndexForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.getTags(this.props.user);
    }

    render(){
        let tags

        if (this.props.tags.length < 1){
            debugger
            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-header">
                        <h1>Tags</h1>
                    
                     
                    </div>
                </div>
            )
        } else {
            tags = this.props.tags.map(tag => (
                <li key={tag.id}>{tag.name}</li>
            )) 
                debugger
            return (
            <div className="tag-index">
                <UsernameFormLeft />
                <div className="tag-index-header">
                    <h1>Tags</h1>
                    
                   
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