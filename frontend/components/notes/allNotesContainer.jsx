import AllNotesForm from './allNotesForm';
import { connect } from 'react-redux';
import { getNotebooks, clearNotebooks } from '../../actions/notebookActions';
import { getNotes, clearNotes, deleteNote } from '../../actions/noteAction';
import { noteDropDown } from "../../actions/modalActions";
import {removeTriage } from '../../actions/tagTriageAction'

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes),
    search: state.ui.search,
    taggings: Object.values(state.ui.triage)
});

const mdp = dispatch => ({
    getNotebooks: user => dispatch(getNotebooks(user)),
    getNotes: id => dispatch(getNotes(id)),
    clearNotebooks: () => dispatch(clearNotebooks()),
    clearNotes: () => dispatch(clearNotes()),
    deleteNote: note => dispatch(deleteNote(note)),
    noteDropDown: entity => dispatch(noteDropDown(entity)),
    removeTriage: () => dispatch(removeTriage()),

});

export default connect(msp, mdp)(AllNotesForm);