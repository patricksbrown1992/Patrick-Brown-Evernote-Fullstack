import React from 'react';
import { Link } from 'react-router-dom';


class usernameFormLeft extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = { loaded: false };
        
    }
    
 

   
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }


    render(){
        // debugger
       
        return (
            
            <div className="left-nav">
                <ul>
                    <form onSubmit={this.handleSubmit}>
                        <div className='log-out-button'>
                            <button type='submit'>Log Out</button>
                        </div>
                    </form>
                    <li className="user-email">{this.props.user.email}</li>
                    <input placeholder="Search all notes..." type="text"></input>
                    <li className="new-note">New Note</li>
                    <li>Shortcuts</li>
                    <li><Link to='/username2'>All Notes</Link></li>
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