import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
    <div className='sign-up-form'>
        <h1 className='log-in-evernote'>Evernote</h1>
        <h3>Remember everything important.</h3>
        <textarea name="user-name-submitter" cols="30" rows="2"></textarea>
        <textarea name="password-submitter" cols="30" rows="2"></textarea>
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