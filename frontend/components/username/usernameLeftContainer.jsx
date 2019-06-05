import UsernameFormLeft from './usernameFormLeft';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import {openAddNoteModal} from '../../actions/modalActions';


const msp = state => ({
    user: state.entities.user[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    addNote: id => dispatch(openAddNoteModal(id))
   
});

export default connect(msp, mdp)(UsernameFormLeft);
