import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameFormLeft';
import NotesIndexFormContainer from '../notes/notesIndexContainer';
class usernameForm extends React.Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        

        return(
            <div className='username-form'>

                <LeftNav />
                <NotesIndexFormContainer />
            </div>

        );
    }


}

export default usernameForm;