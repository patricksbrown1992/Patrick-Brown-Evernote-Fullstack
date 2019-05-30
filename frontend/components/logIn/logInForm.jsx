import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: '', show: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
  
        if (this.state.show === false && this.props.checkEmail(this.state.email)){
            e.preventDefault();
            this.setState({ show: true });
        } else {
            e.preventDefault();
            const email = this.state.email;
            const password = this.state.password;
            const person = {email, password};
         
            this.props.login(person);
            this.setState({ email: '', password: '', show: false });
        }
            
       

        
        
        this.setState({ email: '', password: '' });
    }

    render(){
        let passwordClass;
        let buttonText;
        
        if (this.state.show === false) {
            passwordClass = 'log-in-password-hide';
            buttonText = 'Continue';
        } else {
            passwordClass = 'log-in-password-show';
            buttonText = 'Sign in';
        }
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='outerdiv'>
                    <div className ='log-in-form'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
                        <h1 className = 'log-in-evernote'>NeverNote</h1>
                        <h3>Remember everything important.</h3>
                        <div>

                        </div>
                        <input className="log-in-email-input" placeholder='Email address or username' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                        <input className={passwordClass} type="password" placeholder='password' value={this.state.password} onChange={this.handleChange('password')} />
                        <div className='enter-username'>

                            <button type='submit'>{buttonText}</button>
                        </div>
                        <h3>Remember me for 30 days</h3>
                        <h3>Don't have an account?</h3>
                        <div className='redirect-to-login-signup'>
                            <Link to='/signup'>Create account</Link>
                        </div>
                    </div>

                </div>
            </form>
        )
        
    }
};

export default LogInForm;