import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotesIndexFormContainer from '../notes/notesIndexContainer';
import UsernameFormRight from './usernameFormRight';

class usernameForm extends React.Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        

        return(
            <div className='username-form'>

                <LeftNav />
                <NotesIndexFormContainer />
                <UsernameFormRight />
            </div>

        );
    }


}

export default usernameForm;