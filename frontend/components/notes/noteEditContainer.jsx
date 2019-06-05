import { connect } from 'react-redux';
import NoteEditForm from './noteEditForm';
import {updateNote} from '../../actions/noteAction';

const msp = state => ({
    user: state.entities.user
});

const mdp = dispatch => ({
    updateNote: (id, note) => dispatch(updateNote(id, note))
});

export default connect(msp, mdp)(NoteEditForm);