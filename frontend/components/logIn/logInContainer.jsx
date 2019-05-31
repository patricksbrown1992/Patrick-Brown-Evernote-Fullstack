import { connect } from 'react-redux';
import LogInForm from './logInForm';
import { login, checkEmail, clearErrors } from '../../actions/sessionActions';

const msp = (state) => {
    // debugger
    return {
        errors: state.errors,
        verified: state.ui.verified
    };
    
};

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    checkEmail: (email) => dispatch(checkEmail(email)),
    clearErrors: () => dispatch(clearErrors()),
});


export default connect(msp, mdp)(LogInForm);