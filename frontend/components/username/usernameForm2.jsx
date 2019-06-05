import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './usernameLeftContainer';
import NotebookShowContainer2 from '../notebooks/notebookShowContainer2';
import NoteShowForm from '../notes/noteShowForm';

class usernameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false};
    }

    componentDidMount() {
        debugger
        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
       

    }

    render() {
        // let second_load;
        debugger
        if (!this.state.loaded) {
            debugger
            
            return null;
        } else {
            if(this.props.notebooks.length < 1){
                debugger
                return null;
            } else {

            
            debugger
            const notebook = this.props.notebooks[0];
            const id = notebook.id;
            return (

                <div className='username-form'>
                    <NotebookShowContainer2 id={id} />
                    {/* <LeftNav />
                    <NotebookShowContainer id={id} />
                    <NoteShowForm /> */}
                </div>
                )
            }
        }
    }


}

export default usernameForm2;

