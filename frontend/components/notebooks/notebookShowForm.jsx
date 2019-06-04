import React from 'react';
import NoteIndexContainer from '../notes/notesIndexContainer';
class NotebookShowForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){

       
    //     this.props.getNotebook(this.props.id);
    //     debugger
        
    // }

    handleSubmit(e) {
          debugger
        e.preventDefault();
        
        this.props.deleteNotebook(1);

    }

    render (){
        let theNotebook; 
        this.props.notebooks.forEach(notebook =>{
            if(notebook.id === this.props.id){
                theNotebook = notebook;
            }
        });
        debugger
        
        // debugger
        if (!theNotebook){
            // debugger
            return null;
        } else {
            debugger
            
            return (
                <div className="notebook-show">

                    <div className ='notebook-show-title'>
                    <h1>{theNotebook.name}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <button type='submit'>Delete Notebook</button>
                    </form>
                    </div>
                    <NoteIndexContainer notebook={theNotebook} />
                </div>
                
                
            )
        }
    }

}

export default NotebookShowForm;