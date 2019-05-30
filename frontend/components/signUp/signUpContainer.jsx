import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import { signup } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
});
 

export default connect(msp, mdp)(SignUpForm);