import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotebooksIndexContainer from '../notebooks/notebooksIndexContainer';
import NoteShowForm from '../notes/noteShowForm';

class usernameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { loaded: false };
        
    }

    // componentDidMount() {
    //     this.props.getNotebooks(this.props.user);
    //     debugger
    //     this.setState({ loaded: true });

    // }

    

    render(){
        // let notebooks;
       

        // if(!this.props.notebooks){
        //     return null;
        // }
        debugger
        return(
            <div className='username-form'>

                {/* <LeftNav /> */}
                <NotebooksIndexContainer/>
                <NoteShowForm />
            </div>

        );
    }


}

export default usernameForm;