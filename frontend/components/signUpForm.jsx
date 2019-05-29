import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
    <div className='sign-up-form'>
        <ul>

            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/></li>
            <li><h1 className='log-in-evernote'>NeverNote</h1></li>
            <li><h3>Remember everything important.</h3></li>
            <li><textarea placeholder = 'email' name="user-name-submitter" cols="30" rows="2"></textarea></li>
            <li><textarea placeholder= 'password' name="password-submitter" cols="30" rows="2"></textarea></li>
            <li><div className='sign-up-continue'>

                <Link to='/username'>Continue</Link>
            </div></li>
            <li><h3>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</h3></li>
            <li><h3>Already have an account?</h3></li>
            <li><div className='redirect-to-login-signup'>
                <Link to='/login'>Sign In</Link>
            </div></li>
        </ul>
    </div>

)

export default SignUpForm;