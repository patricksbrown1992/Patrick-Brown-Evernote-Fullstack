import UsernameFormLeft from './usernameFormLeft';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';


const msp = state => ({
    user: state.entities.user[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
   
});

export default connect(msp, mdp)(UsernameFormLeft);
