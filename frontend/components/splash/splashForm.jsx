import React from 'react';
import {Link } from 'react-router-dom';
// import splash_main from '../../../app/assets/images/splash_main';

const splashForm = () => (
    <div className ='splash-buttons'>
        <nav className = "login-button">
            <Link to='/login'>Log in</Link>
        </nav>
            
        <nav className = "signup-button">
            <Link to='/signup'>Sign up</Link>
        </nav>

       
    </div>
);

export default splashForm;