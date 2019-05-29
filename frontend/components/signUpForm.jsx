import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
    <div className='sign-up-form'>
    

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
            <h1 className='log-in-evernote'>NeverNote</h1>
            <h3>Remember everything important.</h3>
            <textarea placeholder = 'email' name="user-name-submitter" cols="50" rows="2"></textarea>
            <textarea placeholder= 'password' name="password-submitter" cols="50" rows="2"></textarea>
            <div className='sign-up-continue'>

                <Link to='/username'>Continue</Link>
            </div>
            <h3>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</h3>
            <h3>Already have an account?</h3>
            <div className='redirect-to-login-signup'>
                <Link to='/login'>Sign In</Link>
            </div>
       
    </div>

)

export default SignUpForm;