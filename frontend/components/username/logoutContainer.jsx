import { logout } from '../../actions/sessionActions';
import { connect } from 'react-redux';
import LogoutForm from './logoutForm';

const msp = state => ({
    user: state.entities.user[state.session.id],
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(LogoutForm);