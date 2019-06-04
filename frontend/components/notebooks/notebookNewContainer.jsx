import { connect } from 'react-redux';
import NotebookNewForm from './notebookNewForm';
import {createNotebook} from '../../actions/notebookActions';
const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
   createNotebook: (notebook) => (dispatch(createNotebook(notebook))) 
});

export default connect(msp, mdp)(NotebookNewForm);
