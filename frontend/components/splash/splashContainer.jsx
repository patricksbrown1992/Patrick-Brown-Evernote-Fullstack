import {connect } from 'react-redux';
import splashForm from './splashForm';
import {login, signup} from '../../actions/sessionActions';
const msp = ({session, entities: {users}}) => {
    return {

    };
};

const mdp = dispatch ({
    login: (user) => (dispatch(login(user))), 
    signup: (user) => (dispatch(signup(user)))
});

export default connect(msp, mdp)(splashForm);