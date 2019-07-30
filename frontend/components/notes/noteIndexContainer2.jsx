import notesIndexForm from './noteIndexForm2';
import { connect } from 'react-redux';
// import {getNotebooks} from '../../actions/notebookActions';
import { getNotes, deleteNote, clearNotes } from '../../actions/noteAction';
import { noteDropDown } from "../../actions/modalActions";
import { removeTriage } from '../../actions/tagTriageAction'
import { getTaggings, deleteTagging, clearTaggings } from '../../actions/taggingActions';

const msp = (state) => ({
    notes: Object.values(state.entities.notes),
    user: state.entities.user[state.session.id], 
    notebooks: Object.values(state.entities.notebooks),
    search: state.ui.search,
    taggings: Object.values(state.ui.triage),


});

const mdp = dispatch => ({
    getNotebooks: user => dispatch(getNotebooks(user)),
    getNotes: id => dispatch(getNotes(id)),
    deleteNote: note => dispatch(deleteNote(note)),
    clearNotes: () => dispatch(clearNotes()),
    noteDropDown: entity => dispatch(noteDropDown(entity)),
    removeTriage: () => dispatch(removeTriage()),
    getTaggings: (user) => dispatch(getTaggings(user)),
    clearTaggings: () => dispatch(clearTaggings())
   

});

export default connect(msp, mdp)(notesIndexForm);