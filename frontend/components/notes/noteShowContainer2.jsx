import { connect } from 'react-redux';
import noteShowForm from './noteShowForm2';
import { updateNote, clearNotes } from '../../actions/noteAction';


const msp = state => ({
    user: state.entities.user[state.session.id],
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    clearNotes: () => dispatch(clearNotes())
});

export default connect(msp, mdp)(noteShowForm);