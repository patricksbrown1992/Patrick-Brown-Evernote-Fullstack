import notesIndexForm from './notesIndexForm';
import {connect} from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import {getNotes, deleteNote} from '../../actions/noteAction';
import {openEditNoteModal, closeModal} from '../../actions/modalActions';

const msp = (state) => ({
    notes: Object.values(state.entities.notes)
   
});

const mdp = dispatch => ({
    
    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),
    openEditNoteModal: (note) => dispatch(openEditNoteModal(note)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(notesIndexForm);