import { connect } from 'react-redux';
import NotebookDropDown from './notebookDropDownForm';
import { openModal, closeModal, openEditModal } from "../../actions/modalActions";

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    editModal: (entity) => dispatch(openEditModal(entity)),
    // deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
});

export default connect(msp, mdp)(NotebookDropDown);