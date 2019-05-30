import { connect } from 'react-redux';
import LogInForm from './logInForm';
import { login, checkEmail } from '../../actions/sessionActions';

const msp = (state) => {
    
    return {
        errors: state.errors,
        verified: state.ui.verified
    };
    
};

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    checkEmail: (email) => dispatch(checkEmail(email))
});


export default connect(msp, mdp)(LogInForm);