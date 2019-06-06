import { connect } from 'react-redux';
import NotebookNewForm from './notebookNewForm';
import {createNotebook} from '../../actions/notebookActions';
import { closeModal } from "../../actions/modalActions";
const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    createNotebook: (notebook) => (dispatch(createNotebook(notebook))),
    closeModal: () => dispatch(closeModal()), 
});

export default connect(msp, mdp)(NotebookNewForm);
