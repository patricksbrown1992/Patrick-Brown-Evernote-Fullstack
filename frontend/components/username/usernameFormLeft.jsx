import React from 'react';
import { Link } from 'react-router-dom';


class usernameFormLeft extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this); 
        this.state = { loaded: false };
        
    }
    
    handleSubmitLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSubmitNewNote(entity){
       
        return (e) => {
            e.preventDefault();
            this.props.addNote(entity);
        };
    }


    render(){
        
       
        return (
            
            <div className="left-nav">
                <ul>
                    <form onSubmit={this.handleSubmitLogOut}>
                        <div className='log-out-button'>
                            <button type='submit'>Log Out</button>
                        </div>
                    </form>
                    <li className="user-email">{this.props.user.email}</li>
                    <input placeholder="Search all notes..." type="text"></input>
                    <li className="new-note"> <button onClick={this.handleSubmitNewNote(this.props.notebook)} type='submit'>New Note</button></li>
                    <li>Shortcuts</li>
                    <li><Link to='/username'>All Notes</Link></li>
                    <li><Link to='/notebooks'>Notebooks</Link></li>
                    <li>Shared with Me</li>
                    <li>Tags</li>
                    <li>Trash</li>
                </ul>
            </div>
            

          
        
        )
    }
}



export default usernameFormLeft;