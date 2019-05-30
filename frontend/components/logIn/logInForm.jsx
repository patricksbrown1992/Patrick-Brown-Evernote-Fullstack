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
        e.preventDefault();

        this.props.login(this.state);
        this.setState({ email: '', password: '' });
    }

    render()(
        <div class='outerdiv'>
            <div className ='log-in-form'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evernote_Icon.png/220px-Evernote_Icon.png" alt=""/>
                <h1 className = 'log-in-evernote'>NeverNote</h1>
                <h3>Remember everything important.</h3>
                <input className="log-in-email-input" placeholder= 'Email address or username' type="text" name="submitter" id=""/>
                
                <div className='enter-username'>

                    <Link to='/loginwithpassword'>Continue</Link>
                </div>
                <h3>Remember me for 30 days</h3>
                <h3>Don't have an account?</h3>
                <div className='redirect-to-login-signup'>
                    <Link to='/signup'>Create account</Link>
                </div>
            </div>

        </div>
        
    )
};

export default logInForm;