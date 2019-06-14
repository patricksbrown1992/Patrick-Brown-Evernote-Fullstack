import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

class TagIndexForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.tags.length < 1){
            return (
                <>
                    <UsernameFormLeft />
                    <h1>Tags</h1>
                    <br/>
                    <h3>--------</h3>
                </>
            )
        }
    }
}

export default TagIndexForm;