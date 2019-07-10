import { connect } from 'react-redux';
import NotebookDropDown from './notebookDropDownForm';
import { openModal, closeModal, openEditModal, notebookDelete } from "../../actions/modalActions";
import {updateNotebook} from '../../actions/notebookActions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    // shortcuts: state.ui.shortcut
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    editModal: (entity) => dispatch(openEditModal(entity)),
    notebookDelete: notebook => dispatch(notebookDelete(notebook)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook))
    
});

export default withRouter(connect(msp, mdp)(NotebookDropDown));