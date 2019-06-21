import NotebookDeleteForm from './notebookDeleteForm';
import { connect } from 'react-redux';
import {deleteNotebook } from '../../actions/notebookActions';
import { closeModal } from "../../actions/modalActions";

const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(NotebookDeleteForm);