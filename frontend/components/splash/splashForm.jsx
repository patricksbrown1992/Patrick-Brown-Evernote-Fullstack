import React from 'react';
import {Link } from 'react-router-dom';


const splashForm = () => (
    <div>
        <div className = "login-button">
            <Link to='/login'>Log in</Link>
        </div>
            
        <div className = "signup-button">
            <Link to='/signup'>Sign Up</Link>

        </div>
    </div>
);

export default splashForm;