import usernameForm from './usernameForm';
import { connect } from 'react-redux';
import {logout} from '../../actions/sessionActions';
import {getNotebooks} from '../../actions/notebookActions';

const msp = state => ({
    user: state.entities.user,
    notebooks: state.entities.notebooks
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: () => dispatch(getNotebooks())
});

export default connect(msp, mdp)(usernameForm);