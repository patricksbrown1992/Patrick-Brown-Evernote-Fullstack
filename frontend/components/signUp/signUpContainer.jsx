import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import { signup } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});
<<<<<<< HEAD

=======
 
>>>>>>> user_log_in
const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
});
 

export default connect(msp, mdp)(SignUpForm);