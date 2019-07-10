import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer2';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
       
    }

    componentDidMount() {

        this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true }));
        // this.props.clearNotes();
        // this.props.clearNotes();
    }

    handleSubmitDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.notebookDropDown(entity)
        };
    }
    

    // handleSubmit(e) {
      
    //     e.preventDefault();
        

    //     // debugger
    //     this.props.deleteNotebook().then(() => {
    //     // debugger
    //         return this.props.history.push('/notebooks');
    //     });
    // }

    render() {
        debugger
        let theNotebook;
        theNotebook = this.props.notebooks[this.props.match.params.notebook_id];
            if (!theNotebook) {
                return null;
            }
            return (
                <>
                    <div className='username-form'>

                        <LeftNav notebook={theNotebook} />

                        <div className="notebook-show">
                            <div className='notebook-show-title'>
                                <h1>{theNotebook.name}</h1>
                                <i onClick={this.handleSubmitDropDown(this.props.notebooks[this.props.match.params.notebook_id])} className="fas fa-ellipsis-h"></i>
                            </div>
                            <NoteIndexContainer notebook={theNotebook} />
                        </div>



                    </div>
                </>

            )
        }
    }



export default NotebookShowForm;