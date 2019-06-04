import { connect } from 'react-redux';
import NotebookEditForm from './notebookEditForm';
import { updateNotebook } from '../../actions/notebookActions';
const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    updateNotebook: (notebook) => (dispatch(updateNotebook(notebook)))
});

export default connect(msp, mdp)(NotebookEditForm);
