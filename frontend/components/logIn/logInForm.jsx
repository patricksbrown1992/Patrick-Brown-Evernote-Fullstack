import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const LogInForm = props =>  {
    

    const [email, updateEmail] = useState(() => {
        return ''
    })

    const [password, updatePassword] = useState(() => {
        return '';
    })
  

    function handleChangeEmail(e) {
        e.preventDefault()
        updateEmail(e.target.value)
    }

    function handleChangePassword(e) {
        e.preventDefault()
        updatePassword(e.target.value)
    }

    function handleSubmit(e) {
   
        e.preventDefault();
        if (props.verified === false){
            props.checkEmail(email);
            props.clearErrors();
        } else { 
            props.login({email, password});
            props.clearErrors();
        }
      
    }
    
   
        
       
    return (
        
        <div className='outerdiv'>
            <div className = 'log-in-form'>
                <div className= "log-in-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt="" />
                    <h1 className='log-in-evernote'>NeverNote</h1>
                    <h3>Remember everything important.</h3>
                </div>
                
                <div className ="log-in-middle">
                    

                    <input className="log-in-email-input" placeholder='Email address' type="text" value={email} onChange={handleChangeEmail}/>
                    <input className={props.verified ? 'log-in-password-show' : 'log-in-password-hide'} type="password" placeholder='Password' value={password} onChange={handleChangePassword} />
                    <br/>
                    
                    {props.errors ? props.errors.map((error, idx) => {
                        return <li key={idx}>{error}</li>
                    }) : ''}
                    <br />
                
                    <button onClick={handleSubmit} type='submit'>{props.verified ? 'Sign in' : 'Continue'}</button>
                     
                </div>
                <div className ="log-in-bottom">

                    <h3>Remember me for 30 days</h3>
                    <h3>Don't have an account?</h3>
                    <div className='redirect-to-login-signup'>
                        <Link to='/signup'>Create account</Link>
                    </div>
                </div>
            </div>

        </div>
        
    )
        
    
};

export default LogInForm;