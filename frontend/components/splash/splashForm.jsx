import React from 'react';
import {Link } from 'react-router-dom';
// import splash_main from '../../../app/assets/images/splash_main';

const splashForm = () => (
    <div className='splash-nav'>
        <h1 className='title'>NeverNote</h1>
        <div className ='splash-buttons'>
            
            <nav className="signup-button">
                <Link to='/signup'>Sign up</Link>
            </nav>
            <nav className = "login-button">
                <Link to='/login'>Log in</Link>
            </nav>
                
            

        
        </div>
    </div>
);

export default splashForm;