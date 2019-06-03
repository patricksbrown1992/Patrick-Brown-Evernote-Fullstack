import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotesIndexFormContainer from '../notes/notesIndexContainer';
import NoteShowForm from '../notes/noteShowForm';

class usernameForm extends React.Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        

        return(
            <div className='username-form'>

                <LeftNav />
                <NotesIndexFormContainer />
                <NoteShowForm />
            </div>

        );
    }


}

export default usernameForm;