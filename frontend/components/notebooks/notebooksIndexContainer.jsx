import notebooksIndexForm from './notebooksIndexForm';
import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebookActions';
import { openModal, closeModal, openEditModal, notebookDropDown, noteDropDown } from "../../actions/modalActions";
import { getNotes, deleteNote, clearNotes } from '../../actions/noteAction';
import {withRouter} from 'react-router-dom';

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
    clearNotes: () => dispatch(clearNotes()),
    notebookDropDown: notebook => dispatch(notebookDropDown(notebook)),
    noteDropDown: entity => dispatch(noteDropDown(entity)),


});

export default withRouter(connect(msp, mdp)(notebooksIndexForm));