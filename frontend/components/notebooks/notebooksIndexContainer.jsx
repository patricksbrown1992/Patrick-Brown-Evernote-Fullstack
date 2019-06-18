import notebooksIndexForm from './notebooksIndexForm';
import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebookActions';
import { openModal, closeModal, openEditModal } from "../../actions/modalActions";
import { getNotes, deleteNote } from '../../actions/noteAction';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    editModal: (entity) => dispatch(openEditModal(entity)),
    addModal: () => dispatch(openModal('add')),
    closeModal: () => dispatch(closeModal()),
    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),

});

export default connect(msp, mdp)(notebooksIndexForm);