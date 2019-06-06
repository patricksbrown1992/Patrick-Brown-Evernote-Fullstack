import { connect } from 'react-redux';
import noteNewForm from './noteNewForm';
import { createNote} from '../../actions/noteAction';
import {closeModal } from "../../actions/modalActions";


const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    createNote: (id, note) => dispatch(createNote(id, note)),
    closeModal: () => dispatch(closeModal()),
});


export default connect(msp, mdp)(noteNewForm);