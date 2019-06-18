import UsernameFormLeft from './usernameFormLeft';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import {openAddNoteModal} from '../../actions/modalActions';
import { getNotebooks } from '../../actions/notebookActions';
import { clearNotebooks} from '../../actions/notebookActions';


const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    addNote: entity => dispatch(openAddNoteModal(entity)),
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    clearNotebooks: () => dispatch(clearNotebooks())
   
});

export default connect(msp, mdp)(UsernameFormLeft);
