import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
import { Link } from 'react-router-dom';

class NotebooksIndexForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {loaded: false};
    }

    componentDidMount() {
        debugger
        this.props.getNotebooks(this.props.user);
        this.setState({ loaded: true });
    }

    render(){
        let notebooks;
        if (this.state.loaded){
            notebooks = this.props.notebooks.map(notebook => (
                <br/>
                <Link to='/username'>{notebook.name}</Link>
                <br/>
            ))
        }
        debugger
        return (

            <div className='notebooks-index'>

                <UsernameFormLeft />
                
                <div className='notebooks-right'>
                    <h1>Notebooks</h1>
                    <h3>My notebook list</h3>
                    <h3 className='notebooks-list'>{notebooks}</h3>
                </div>
                
                
            </div>
        );
    }

}

export default NotebooksIndexForm;