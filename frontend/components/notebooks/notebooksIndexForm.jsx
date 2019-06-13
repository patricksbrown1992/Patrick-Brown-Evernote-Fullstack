import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';
// import { Link } from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
// import NotebookShowForm from './notebookShowContainer2';

import styleDate from '../../util/styleDate';

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
                        <div className="notebook-index-header2">
                            <h3>My notebook list</h3>
                            <form onSubmit={this.handleSubmitAdd}>

                                <button type='submit' className='new-notebook-button'><i className="fas fa-book-medical"></i>New Notebook</button>
                            </form>
                        </div>
                    </div>
                </div>

            );
        } else {
             notebooks = this.props.notebooks.map(notebook => (
              
                <li key={notebook.id} className="notebook-index-table" > 
                    <div className="notebook-index-table-title"><Link to={`/username/${notebook.id}`} ><i className="fas fa-book"></i>{notebook.name}</Link></div>
                    <div className="notebook-index-table-email"><h4>{this.props.user.email}</h4></div> 
                    <div className="notebook-index-table-time"><h4>{styleDate(notebook.updated_at)}</h4></div>  
                    <div className="notebook-index-table-button"><button onClick={this.handleSubmitEdit(notebook)} type='submit'><i className="fas fa-ellipsis-h"></i>Rename Notebook</button></div>
                    
                </li>
            ));

        return (
            
            <div className='notebooks-index'>

                <UsernameFormLeft />
                
                <div className='notebooks-index-right'>
                    <h1>Notebooks</h1>
                    <div className="notebook-index-header2">
                        <h3>My notebook list</h3>
                        <form onSubmit={this.handleSubmitAdd}>

                            <button className='new-notebook-button' type='submit'><i className="fas fa-book-medical"></i>New Notebook</button>
                        </form>
                    </div>
                    <div className = 'index-of-notebooks'>
                        <div className='notebook-table-labs'>
                            <h6 className="notebook-table-label-title">Title</h6>
                            <h6 className="notebook-table-label-email">Create By</h6>
                            <h6 className= "notebook-table-label-time">Updated</h6>
                            <h6 className= "notebook-table-label-actions">Actions</h6>
                        </div>
                        {/* <ul className='notebooks-index-list'>{notebooks}</ul> */}
                        <ul>{notebooks}</ul>
                    </div>
        
                 
                </div>
            </div>
        );
        }
    }

}

export default NotebooksIndexForm;