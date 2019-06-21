import UsernameFormLeft from './usernameFormLeft';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import {openAddNoteModal} from '../../actions/modalActions';
import { getNotebooks, clearNotebooks } from '../../actions/notebookActions';
import { clearNotes, getNotes } from '../../actions/noteAction';



const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    addNote: entity => dispatch(openAddNoteModal(entity)),
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    clearNotebooks: () => dispatch(clearNotebooks()),
    clearNotes: () => dispatch(clearNotes()),
    getNotes: id => dispatch(getNotes(id)),
   
});

export default connect(msp, mdp)(UsernameFormLeft);
