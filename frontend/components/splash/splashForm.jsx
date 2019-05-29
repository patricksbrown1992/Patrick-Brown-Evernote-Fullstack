import React from 'react';
import {Link } from 'react-router-dom';


const splashForm = ({user, login, signup}) => (

    <div>
        
        <Link to='/Registration.action'>Sign up</Link>
        <Link to='/Login.action'>Log in</Link>
       
    </div>
);

export default splashForm;