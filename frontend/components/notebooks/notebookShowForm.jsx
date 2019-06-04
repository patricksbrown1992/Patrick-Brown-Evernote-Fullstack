import React from 'react';
import NoteIndexContainer from '../notes/notesIndexContainer';
class NotebookShowForm extends React.Component {
    constructor(props){
        super(props);
       
    }

    // componentDidMount(){

       
    //     this.props.getNotebook(this.props.id);
    //     debugger
        
    // }

    render (){
        let theNotebook; 
        this.props.notebooks.forEach(notebook =>{
            if(notebook.id === this.props.id){
                theNotebook = notebook;
            }
        });
        // debugger
        
        // debugger
        if (!theNotebook){
            // debugger
            return null;
        } else {
            // debugger
            
            return (
                <div className="notebook-show">

                    <div className ='notebook-show-title'>
                    <h1>{theNotebook.name}</h1>
                    
                    </div>
                    <NoteIndexContainer notebook={theNotebook} />
                </div>
                
                
            )
        }
    }

}

export default NotebookShowForm;