import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotebooksIndexMainContainer from '../notebooks/notebookIndexMainContainer';
import NoteShowForm from '../notes/noteShowForm';

class usernameForm extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){




            return (

                <div className='username-form'>
                   
                    <LeftNav />
                    <NotebooksIndexMainContainer/>
                    <NoteShowForm />
                </div>
            )
        

    }


}

export default usernameForm;