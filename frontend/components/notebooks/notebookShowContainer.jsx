import NotebookShowForm from './notebookShowForm';
import { connect } from 'react-redux';
import { getNotebook, deleteNotebook } from '../../actions/notebookActions';

const msp = (state, ownProps) => ({
    notebooks: Object.values(state.entities.notebooks)

});

const mdp = dispatch => ({
    getNotebook: notebook => dispatch(getNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(msp, mdp)(NotebookShowForm);