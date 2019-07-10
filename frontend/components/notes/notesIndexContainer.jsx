import notesIndexForm from './notesIndexForm';
import {connect} from 'react-redux';
import {getNotebooks} from '../../actions/notebookActions';
import {getNotes} from '../../actions/noteAction';
import { openModal, closeModal, openEditModal, notebookDropDown, noteDropDown } from "../../actions/modalActions";

const msp = (state) => ({
    notes: Object.values(state.entities.notes)
   
});
s
const mdp = dispatch => ({
    
    getNotes: id => dispatch(getNotes(id)),
    noteDropDown: entity => dispatch(noteDropDown(entity)),
    
});

export default connect(msp, mdp)(notesIndexForm);