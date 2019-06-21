// import noteDeleteForm from './noteDeleteForm'
import NoteDeleteForm from './noteDeleteForm';
import { connect } from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import { deleteNote } from '../../actions/noteAction';
import { closeModal } from '../../actions/modalActions';

const msp = (state) => ({
    notes: Object.values(state.entities.notes)

});

const mdp = dispatch => ({

    deleteNote: note => dispatch(deleteNote(note)),
    closeModal: () => dispatch(closeModal())

});

export default connect(msp, mdp)(NoteDeleteForm);
