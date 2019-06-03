import usernameForm from './usernameForm';
import { connect } from 'react-redux';
import {logout} from '../../actions/sessionActions';
import {getNotebooks} from '../../actions/notebookActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: (user) => dispatch(getNotebooks(user))
});

export default connect(msp, mdp)(usernameForm);