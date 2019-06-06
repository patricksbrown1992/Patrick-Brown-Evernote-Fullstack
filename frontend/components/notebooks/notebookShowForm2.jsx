import React from 'react';
import NoteIndexContainer from '../notes/noteIndexContainer2';
import LeftNav from '../username/usernameLeftContainer';

class NotebookShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        // this.props.getNotebooks(this.props.user).then(() => this.setState({ loaded: true })).then(() => this.props.clearNotes());
        this.props.clearNotes();

    }

    handleSubmit(e) {
      
        e.preventDefault();
        

        // debugger
        this.props.deleteNotebook(this.props.notebooks[this.props.match.params.notebook_id]).then(() => {
        // debugger
            return this.props.history.push('/notebooks');
        });
    }

    render() {
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
                                <form onSubmit={this.handleSubmit}>
                                    <button type='submit'>Delete Notebook</button>
                                </form>
                            </div>
                            <NoteIndexContainer notebook={theNotebook} />
                        </div>



                    </div>
                </>

            )
        }
    }



export default NotebookShowForm;