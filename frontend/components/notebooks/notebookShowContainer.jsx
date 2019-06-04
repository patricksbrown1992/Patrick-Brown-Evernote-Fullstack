import NotebookShowForm from './notebookShowForm';
import { connect } from 'react-redux';
import { getNotebook } from '../../actions/notebookActions';

const msp = (state, ownProps) => ({
    notebooks: Object.values(state.entities.notebooks)

});

const mdp = dispatch => ({
    getNotebook: notebook => dispatch(getNotebook(notebook))
});

export default connect(msp, mdp)(NotebookShowForm);