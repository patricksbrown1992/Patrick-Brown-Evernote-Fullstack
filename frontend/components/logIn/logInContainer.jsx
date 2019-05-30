import { connect } from 'react-redux';
import LogInForm from './logInForm';
import { login } from '../../actions/sessionActions';

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user))
});


export default connect(msp, mdp)(LogInForm);