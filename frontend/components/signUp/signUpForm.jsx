import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
<<<<<<< HEAD
    }

    render(){
        <div className = 'outerdiv'>
            <div className='sign-up-form'>
            
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
                    <h1 className='log-in-evernote'>NeverNote</h1>
                    <h3>Remember everything important.</h3>
                
                    <input className="sign-up-email" type="text" placeholder='email' name="user-name-submitter" id="" />
                    <input className = "sign-up-password" type="password" placeholder='password' name="password-submitter" id=""/>
                    
                    <div className='sign-up-continue'>

                        <Link to='/username'>Continue</Link>
                    </div>
                    <p>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
                    <h3>Already have an account?</h3>
                    <div className='redirect-to-login-signup'>
                        <Link to='/login'>Sign In</Link>
                    </div>
            
            </div>
        </div>

=======
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    handleChange(field) {
        
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
   
        this.props.signup(this.state);
        this.setState({email: '', password: ''});
    }
 
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = 'outerdiv'>
                    <div className='sign-up-form'>
                    
                            
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
                            <h1 className='log-in-evernote'>NeverNote</h1>
                            <h3>Remember everything important.</h3>
                        
                            <input className="sign-up-email" type="text" value={this.state.email} placeholder='email' onChange={this.handleChange('email')} />
                            <input className = "sign-up-password" type="password" placeholder='password' value={this.state.password} onChange={this.handleChange('password')}/>
                            
                            <div className='sign-up-continue'>

                                <button type='submit'>Continue</button>
                            </div>
                            <p>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
                            <h3>Already have an account?</h3>
                            <div className='redirect-to-login-signup'>
                                <Link to='/login'>Sign In</Link>
                            </div>
                    
                    </div>
                </div>
            </form>
        );
>>>>>>> user_log_in
    };
};

export default SignUpForm;