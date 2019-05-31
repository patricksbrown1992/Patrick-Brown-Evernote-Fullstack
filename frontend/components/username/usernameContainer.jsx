import usernameForm from './usernameForm';
import { connect } from 'react-redux';
import {logout} from '../../actions/sessionActions';

const msp = state => ({
    user: state.user,
    notebooks: state.notebooks
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(usernameForm);