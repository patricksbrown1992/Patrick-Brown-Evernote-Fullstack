import notesIndexForm from './noteIndexForm2';
import { connect } from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import { getNotes, deleteNote, clearNotes } from '../../actions/noteAction';
import { noteDropDown } from "../../actions/modalActions";

const msp = (state) => ({
    notes: Object.values(state.entities.notes),
    notebooks: Object.values(state.entities.notebooks),
    search: state.ui.search

});

const mdp = dispatch => ({

    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),
    clearNotes: () => dispatch(clearNotes()),
    noteDropDown: entity => dispatch(noteDropDown(entity)),
   

});

export default connect(msp, mdp)(notesIndexForm);