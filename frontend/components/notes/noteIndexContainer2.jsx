import notesIndexForm from './noteIndexForm2';
import { connect } from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import { getNotes, deleteNote, clearNotes } from '../../actions/noteAction';
import { noteDropDown } from "../../actions/modalActions";

const msp = (state) => ({
    notes: Object.values(state.entities.notes),
    user: state.entities.user[state.session.id], 
    notebooks: Object.values(state.entities.notebooks),
    search: state.ui.search

});

const mdp = dispatch => ({
    getNotebooks: user => dispatch(getNotebooks(user)),
    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),
    clearNotes: () => dispatch(clearNotes()),
    noteDropDown: entity => dispatch(noteDropDown(entity)),
   

});

export default connect(msp, mdp)(notesIndexForm);