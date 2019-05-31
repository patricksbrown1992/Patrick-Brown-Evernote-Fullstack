import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import { signup, clearErrors } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

 
const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)), 
    clearErrors: () => dispatch(clearErrors())
});
 

export default connect(msp, mdp)(SignUpForm);