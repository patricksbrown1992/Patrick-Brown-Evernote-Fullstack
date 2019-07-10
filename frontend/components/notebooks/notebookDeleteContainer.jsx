import NotebookDeleteForm from './notebookDeleteForm';
import { connect } from 'react-redux';
import {deleteNotebook } from '../../actions/notebookActions';
import { closeModal } from "../../actions/modalActions";
import { withRouter } from 'react-router-dom';

const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(NotebookDeleteForm));