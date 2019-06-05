import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
// import { Link } from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
// import NotebookShowForm from './notebookShowContainer2';

class NotebooksIndexForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {loaded: false, selected: null};
        this.updateSelected = this.updateSelected.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    }

    componentDidMount() {
        this.props.getNotebooks(this.props.user);
    }

    // handleSubmit(e) {
    //       debugger
    //     e.preventDefault();
    //     if (e.currentTarget.children[0].classList.value === "index-of-notebooks"){
    //         debugger
    //         this.props.editModal();
    //     } else {
    //         this.props.addModal('add');
    //     }
        
    // }

    handleSubmitAdd(e){
        e.preventDefault();

        this.props.addModal();
    }

    handleSubmitEdit(id){
        return (e) => {
            e.preventDefault();
            this.props.editModal(id);
        };
    }

    
    updateSelected(id) {
        debugger
        return () => {
            this.setState({ selected: id });
        };
    }

    render(){
        debugger
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
                 <li key={notebook.id} > <Link to={`/username/${notebook.id}`} >{notebook.name}</Link> 
                <br/>
                <button onClick={this.handleSubmitEdit(notebook.id)} type='submit'>Rename Notebook</button></li>
            ));

        return (

            <div className='notebooks-index'>

                <UsernameFormLeft />
                
                <div className='notebooks-index-right'>
                    <h1>Notebooks</h1>
                    <h3>My notebook list</h3>
                    <form onSubmit={this.handleSubmitAdd}>

                        <button type='submit'>New Notebook</button>
                    </form>
                
                    
                    <div className = 'index-of-notebooks'>

                        <ul className='notebooks-index-list'>{notebooks}</ul>
                    </div>
        
                 
                </div>
            </div>
        );
        }
    }

}

export default NotebooksIndexForm;