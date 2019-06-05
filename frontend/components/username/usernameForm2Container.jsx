import { connect } from 'react-redux';
import UsernameForm2 from './usernameForm2';
import { logout } from '../../actions/sessionActions';
import { getNotebooks, getNotebook } from '../../actions/notebookActions';
import { getNotes } from '../../actions/noteAction';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    getNotebook: notebook => dispatch(getNotebook(notebook)),
    getNotes: notebook => dispatch(getNotes(notebook))
});

export default connect(msp, mdp)(UsernameForm2);