import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotebooksIndexMainContainer from '../notebooks/notebookIndexMainContainer';
import NoteShowForm from '../notes/noteShowForm';

class usernameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    componentDidMount(){
        this.props.getNotebooks(this.props.user);

    }

    render(){
        if(!this.state){
            return null;
        } else {

            if(Object.values(this.props.notebooks).length < 1){
    
            } else {

                return (
        
                    <div className='username-form'>
        
                        <LeftNav />
                        <NotebooksIndexMainContainer />
                        <NoteShowForm />
                    </div>
                )
            }

        }    

    }


}

export default usernameForm2;