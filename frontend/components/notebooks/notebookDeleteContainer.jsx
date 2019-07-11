import NotebookDeleteForm from './notebookDeleteForm';
import { connect } from 'react-redux';
import {deleteNotebook } from '../../actions/notebookActions';
import { closeModal } from "../../actions/modalActions";
import { withRouter } from 'react-router-dom';
import { deleteNote } from '../../actions/noteAction';

const msp = state => ({
    user: state.entities.user,
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    deleteNote: note => dispatch(deleteNote(note)),
});

export default withRouter(connect(msp, mdp)(NotebookDeleteForm));