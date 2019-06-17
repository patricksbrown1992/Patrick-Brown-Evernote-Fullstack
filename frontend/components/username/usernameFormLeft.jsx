import React from 'react';
import { Link } from 'react-router-dom';


class usernameFormLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { loaded: false, body: '' };

    }

    handleChange(){
        return (e) => {
            this.setState({body: e.target.value})
        }
    }

    handleSubmitLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSubmitNewNote(entity) {
        return (e) => {
            e.preventDefault();
            this.props.addNote(entity);
        };
    }

    handleNoteSearch(){
        return (e) => {
            e.preventDefault();
            this.props.noteSearch(this.state.body)
        }
    }


    render() {

        //    debugger
        return (

            <div className="left-nav">
                <ul>
                    <form onSubmit={this.handleSubmitLogOut}>
                        <div className='log-out-button'>
                            <button type='submit'>Log Out</button>
                        </div>
                    </form>
                    <li className="user-email">{this.props.user.email}</li>
                    <form onSubmit={this.handleNoteSearch}>
                        <input placeholder="Search all notes..." type="text"></input>
                    </form>
                    <span onClick={this.handleSubmitNewNote(this.props.notebook)} className="new-note"><i className="fas fa-plus-circle fa-2x"></i><button type='submit'>New Note</button></span>
                    <li><i className="fas fa-caret-right"></i><i className="fas fa-star"></i>Shortcuts</li>
                    <li><Link to='/allnotes'><i className="fas fa-sticky-note"></i>All Notes</Link></li>
                    <li><i className="fas fa-caret-right"></i><Link to='/notebooks'><i className="fas fa-book"></i>Notebooks</Link></li>
                    <li><i className="fas fa-user-friends"></i>Shared with Me</li>
                    <li><Link to='/tags'><i className="fas fa-tag"></i>Tags</Link></li>
                    <li><i className="fas fa-trash"></i>Trash</li>
                    {/* <i class="fas fa-caret-down"></i> */}

                </ul>
            </div>




        )
    }
}



export default usernameFormLeft;