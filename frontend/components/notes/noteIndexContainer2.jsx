import notesIndexForm from './noteIndexForm2';
import { connect } from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import { getNotes, deleteNote, clearNotes } from '../../actions/noteAction';
import { openEditNoteModal, closeModal } from '../../actions/modalActions';

const msp = (state) => ({
    notes: Object.values(state.entities.notes)

});

const mdp = dispatch => ({

    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),
    clearNotes: () => dispatch(clearNotes())
   

});

export default connect(msp, mdp)(notesIndexForm);