import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
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

        if(e.currentTarget.children[0].classList.value === "sign-up-continue"){

            this.props.signup(this.state);
            this.setState({ email: '', password: '' });
            this.props.clearErrors();
            
        } else {
            const email = 'admin@admin.com';
            const password = '123456';
            const person = { email, password };
            this.props.login(person);
            this.setState({ email: '', password: '' });
            this.props.clearErrors();
        }
        
    }
 
    render(){
    
        let errors;
        if (this.props.errors.length > 0) {
          
            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        } 
      
        return (
            
                <div className = 'outerdiv'>
                    <div className='sign-up-form'>
                    
                            <div className ="sign-up-top">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt="" />
                                <h1 className='log-in-evernote'>NeverNote</h1>
                                <h3>Remember everything important.</h3>

                            </div>
                            
                            <div className="sign-up-middle">
                                 <form onSubmit={this.handleSubmit}>
                                    <div className="demo-button">
                                        <button type='submit'>Demo for Free</button>
                                    </div>
                                 </form>
                                <br/>
                                <div className="sign-up-inputs">

                                <input className="sign-up-email" type="text" value={this.state.email} placeholder='Email' onChange={this.handleChange('email')} />
                                <input className = "sign-up-password" type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')}/>
                                </div>
                                <ul>
                                    <br/>
                                    {errors}
                                    <br/>
                                </ul>
                            <form onSubmit={this.handleSubmit}>
                                    <div className='sign-up-continue'>

                                        <button type='submit'>Continue</button>
                                    </div>
                            </form>
                            </div>  
                            <div className="sign-up-bottom">
                                <p>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
                                <h3>Already have an account?</h3>
                                <div className='redirect-to-login-signup'>
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>
                    
                    </div>
                </div>
            
        );
    };
};

export default SignUpForm;