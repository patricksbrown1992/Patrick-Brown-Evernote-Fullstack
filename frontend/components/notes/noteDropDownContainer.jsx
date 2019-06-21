import { connect } from 'react-redux';
import NoteDropDown from './noteDropDownForm';
import { closeModal, openEditModal, notebookDelete } from "../../actions/modalActions";

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    editModal: (entity) => dispatch(openEditModal(entity)),
    notebookDelete: notebook => dispatch(notebookDelete(notebook)),
});

export default connect(msp, mdp)(NoteDropDown);