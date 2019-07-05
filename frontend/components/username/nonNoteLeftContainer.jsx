import UsernameFormLeft from './nonNoteLeftNav';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { logOutModal } from '../../actions/modalActions';
import { getNotebooks, clearNotebooks } from '../../actions/notebookActions';
import { clearNotes, getNotes } from '../../actions/noteAction';



const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    clearNotebooks: () => dispatch(clearNotebooks()),
    clearNotes: () => dispatch(clearNotes()),
    getNotes: id => dispatch(getNotes(id)),
    logOutModal: () => dispatch(logOutModal())

});

export default connect(msp, mdp)(UsernameFormLeft);
