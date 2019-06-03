import React from 'react';
import NoteIndexContainer from '../notes/notesIndexForm';
class NotebookShowForm extends React.Component {
    constructor(props){
        super(props);
       
    }

    componentDidMount(){

        debugger
        this.props.getNotebook(this.props.notebooks[this.props.id]);
        
    }

    render (){
        let notebook;
        debugger
        
        // debugger
        if (!this.props.notebook) {
            return null;
        } else {
            notebook = this.props.notebooks[id];
            return (
                <>
    
                    {notebook.title}
                    {/* <NoteIndexContainer notebook={notebook} /> */}
                </>
                
            )
        }
    }

}

export default NotebookShowForm;