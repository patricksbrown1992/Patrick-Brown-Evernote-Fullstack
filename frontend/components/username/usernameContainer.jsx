import usernameForm from './usernameForm';
import { connect } from 'react-redux';

const msp = state => ({
    user: state.user,
    notebooks: state.user.notebooks
});

const mdp = dispatch => ({
    
});

export default connect(msp, mdp)(usernameForm);