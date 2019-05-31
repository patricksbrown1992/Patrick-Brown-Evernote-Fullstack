import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
    //   debugger
        e.preventDefault();
        if (this.props.verified === false){
            this.props.checkEmail(this.state.email);
            this.props.clearErrors();
        } else { 
            this.props.login(this.state);
            this.props.clearErrors();
        }
      
    }
    render(){
        let passwordClass;
        let buttonText;
        let errors;
        // let changeHeight;
        if (this.props.errors.length > 0) {

            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        } 
        if (this.props.verified != true) {
            passwordClass = 'log-in-password-hide';
            buttonText = 'Continue';
            // changeHeight = 'log-in-form'
        } else {
            // changeHeight= 'log-in-form-2'
            passwordClass = 'log-in-password-show';
            buttonText = 'Sign in';
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
                        

                        <input className="log-in-email-input" placeholder='Email address' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                        <input className={passwordClass} type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} />
                        <br/>
                       
                        {errors}
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className='enter-username'>

                                <button type='submit'>{buttonText}</button>
                            </div>
                        </form>
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
        
    }
};

export default LogInForm;