import notebooksIndexMainForm from './notebooksIndexMainForm';
import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebookActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
});

const mdp = dispatch => ({
    getNotebooks: (user) => dispatch(getNotebooks(user))
});

export default connect(msp, mdp)(notebooksIndexMainForm);