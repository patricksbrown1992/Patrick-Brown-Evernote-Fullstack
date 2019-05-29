import React from 'react';
import { Link } from 'react-router-dom';

const logInForm = () => (
    <div className ='log-in-form'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
        <h1 className = 'log-in-evernote'>NeverNote</h1>
        <h3>Remember everything important.</h3>
        <textarea placeholder= 'enter email or username' name="submitter" cols="30" rows="1"></textarea>
        <div className='enter-username'>

            <Link to='/loginwithpassword'>Continue</Link>
        </div>
        <h3>Remember me for 30 days</h3>
        <h3>Don't have an account?</h3>
        <div className='redirect-to-login-signup'>
            <Link to='/signup'>Create account</Link>
        </div>
    </div>
    
)

export default logInForm;