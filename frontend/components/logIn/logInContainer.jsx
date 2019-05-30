import { connect } from 'react-redux';
import LogInForm from './logInForm';
import { login, checkEmail } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    checkEmail: (user) => dispatch(checkEmail(user))
});


export default connect(msp, mdp)(LogInForm);