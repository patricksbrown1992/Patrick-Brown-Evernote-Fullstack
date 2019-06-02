import usernameForm from './usernameForm';
import { connect } from 'react-redux';
import {logout} from '../../actions/sessionActions';
import {getNotebooks} from '../../actions/notebookActions';

const msp = state => {
    const id = state.session.id;

    return {

        user: state.entities.user[id],
        notebooks: state.entities.notebooks
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    getNotebooks: (user) => dispatch(getNotebooks(user))
});

export default connect(msp, mdp)(usernameForm);