import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
// import { Link } from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import NotebookShowForm from './notebookShowContainer';

class NotebooksIndexForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {loaded: false, selected: 3};
        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidMount() {
        this.props.getNotebooks(this.props.user);
    }

    
    updateSelected(id) {
        debugger
        return () => {
            this.setState({ selected: id });
        };
    }

    render(){
        let notebooks;
        if (this.props.notebooks.length < 1){
            return (
                <div className='notebooks-index'>

                    <UsernameFormLeft />

                    <div className='notebooks-index-right'>
                        <h1>Notebooks</h1>
                        <h3>My notebook list</h3>
                    </div>
                </div>

            );
        } else {
             notebooks = this.props.notebooks.map(notebook => (
            // <li key={notebook.id} onClick={this.updateSelected(notebook.id)}>{notebook.name}</li> 
                 <li key={notebook.id}><Link to="/username" selected={this.props.selected}>{notebook.name}</Link> </li>
            ));

        return (

            <div className='notebooks-index'>

                <UsernameFormLeft />
                
                <div className='notebooks-index-right'>
                    <h1>Notebooks</h1>
                    <h3>My notebook list</h3>
                    <button type='submit'>New Notebook</button>
                

                    <ul className='notebooks-index-list'>{notebooks}</ul>
                 
                </div>
            </div>
        );
        }
    }

}

export default NotebooksIndexForm;