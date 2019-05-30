import { connect } from 'react-redux';
import LogInForm from './signUpForm';
import { login } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(login(user))
});


export default connect(msp, mdp)(LogInForm);