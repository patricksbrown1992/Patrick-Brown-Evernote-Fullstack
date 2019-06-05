import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotebookShowContainer2 from '../notebooks/notebookShowContainer2';
// import NoteShowForm from '../notes/noteShowForm';

class usernameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false};
    }

    componentDidMount() {
      
        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
       

    }

    render() {
        
       
        if (!this.state.loaded) {
       
            
            return null;
        } else {
            if(this.props.notebooks.length < 1){
              
                return (
                    <LeftNav />
                    
                )
            } else {

    

            const notebook = this.props.notebooks[0];
            const id = notebook.id;
            return (

                
                <NotebookShowContainer2 id={id} />
                
                )
            }
        }
    }


}

export default usernameForm2;

