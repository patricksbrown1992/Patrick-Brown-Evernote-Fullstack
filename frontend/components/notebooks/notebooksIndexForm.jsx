import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
// import { Link } from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
// import NotebookShowForm from './notebookShowContainer2';
import NoteShowForm from '../notes/noteShowForm';

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
    //     
    //     e.preventDefault();
    //     if (e.currentTarget.children[0].classList.value === "index-of-notebooks"){
    //        
    //         this.props.editModal();
    //     } else {
    //         this.props.addModal('add');
    //     }
        
    // }

    handleSubmitAdd(e){
        e.preventDefault();

        this.props.addModal();
    }

    handleSubmitEdit(entity){
        return (e) => {
            e.preventDefault();
            this.props.editModal(entity);
        };
    }

    
    updateSelected(id) {
    
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
                        <form onSubmit={this.handleSubmitAdd}>

                            <button type='submit' className='new-notebook-button'><i className="fas fa-book-medical"></i>New Notebook</button>
                        </form>
                    </div>
                </div>

            );
        } else {
             notebooks = this.props.notebooks.map(notebook => (
                <li key={notebook.id} className > 
                {/* <br/> */}
                <Link to={`/username/${notebook.id}`} >{notebook.name}</Link> 
                {/* <br/> */}
                {/* User: */}
                {/* <br/> */}
                {this.props.user.email}
                {/* <br/> */}
                {/* Created By: */}
                {/* <br/> */}
                {/* {notebook.created_at.split('.')[0].split('T').join(' ')} */}
                {/* <br/>  */}
                {/* Updated At: */}
                {/* <br/> */}
                <h5>{notebook.updated_at.split('.')[0].split('T').join(' ')}</h5> 
                {/* <br/> */}
                {/* <br/> */}
                <button onClick={this.handleSubmitEdit(notebook)} type='submit'>Rename Notebook</button>
                {/* <br/> */}
                </li>
            ));

        return (
            
            <div className='notebooks-index'>

                <UsernameFormLeft />
                
                <div className='notebooks-index-right'>
                    <h1>Notebooks</h1>
                    <h3>My notebook list</h3>
                    <form onSubmit={this.handleSubmitAdd}>

                        <button className='new-notebook-button' type='submit'><i className="fas fa-book-medical"></i>New Notebook</button>
                    </form>
                    <br/>
                    <br/>
                    
                    <div className = 'index-of-notebooks'>
                        <div className='notebook-table-labs'>
                            <h3>Title</h3>
                            <h3>Create By</h3>
                            <h3>Updated</h3>
                            <h3>Rename</h3>
                        </div>
                        <ul className='notebooks-index-list'>{notebooks}</ul>
                    </div>
        
                 
                </div>
            </div>
        );
        }
    }

}

export default NotebooksIndexForm;