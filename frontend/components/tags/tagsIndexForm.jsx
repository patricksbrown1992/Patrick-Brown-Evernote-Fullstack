import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

class TagIndexForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
      
        this.props.getTags(this.props.user);
    }

    render(){
        let tags

        if (this.props.tags.length < 1){
   
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
                <li key={tag.id}>
                <div className="tag-index-intial">{tag.name[0].toUpperCase()}</div>
                
                {tag.name}
                </li>
            )) 
            
            return (
            <div className="tag-index">
                <UsernameFormLeft />
                <div className="tag-index-right">

               
                    <div className="tag-index-header">
                        <h1>Tags</h1>
                        
                    
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