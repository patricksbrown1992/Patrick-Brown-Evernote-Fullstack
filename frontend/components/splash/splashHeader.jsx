import React from 'react';
import {Link } from 'react-router-dom';
// import splash_main from '../../../app/assets/images/splash_main';

const splashHeader = () => (
    
    <div className='splash-nav'>
        <div className ='splash-nav-left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt="" />
            <h1 className='title'>NeverNote</h1>
        </div>
        <div className="features-div">
            {/* <ul>
                <Link to='/features'>PLANS</Link>
                <Link to='/features'>FEATURES</Link>
                <Link to='/features'>HELP & LEARNING</Link>
                <Link to='/features'>ABOUT US</Link>

            </ul> */}
        </div>
        <div className='splash-buttons'>
            
            <nav className="signup-button">
                <Link to='/signup'>Sign up</Link>
            </nav>
            <span>
                <p className="or">or</p>
            </span>
            
            <nav className = "login-button">
                <Link to='/login'>Log in</Link>
            </nav>
        </div>
                
            

        
       
    </div>
);

export default splashHeader;