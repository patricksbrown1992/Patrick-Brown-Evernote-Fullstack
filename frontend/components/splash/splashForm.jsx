import React from 'react';
import {Link } from 'react-router-dom';
// import splash_main from '../../../app/assets/images/splash_main';

const splashForm = () => (
    <div className='splash-nav'>
        <ul >
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt="" /></li>
            <li><h1 className='title'>NeverNote</h1></li>

            <li><div className='splash-buttons'>
                
                <nav className="signup-button">
                    <li><Link to='/signup'>Sign up</Link></li>
                </nav>
                <nav className = "login-button">
                    <li><Link to='/login'>Log in</Link></li>
                </nav>
                    
                

            
            </div></li>
        </ul>
    </div>
);

export default splashForm;