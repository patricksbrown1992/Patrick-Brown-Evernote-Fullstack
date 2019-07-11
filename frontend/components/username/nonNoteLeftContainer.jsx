import UsernameFormLeft from './nonNoteLeftNav';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { logOutModal } from '../../actions/modalActions';
import { getNotebooks, clearNotebooks, updateNotebook } from '../../actions/notebookActions';
import { clearNotes, getNotes, updateNote } from '../../actions/noteAction';
import {receiveSearch, clearSearch} from '../../actions/searchActions';



const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes),
    search: state.ui.search
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    clearNotebooks: () => dispatch(clearNotebooks()),
    clearNotes: () => dispatch(clearNotes()),
    getNotes: id => dispatch(getNotes(id)),
    logOutModal: () => dispatch(logOutModal()),
    updateNotebook: (id, notebook) => dispatch(updateNotebook(id, notebook)),
    updateNote: (id, note) => dispatch(updateNote(id,note)),
    receiveSearch: search => dispatch(receiveSearch(search)),
    clearSearch: () => dispatch(clearSearch())

});

export default connect(msp, mdp)(UsernameFormLeft);
