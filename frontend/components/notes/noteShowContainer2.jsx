import { connect } from 'react-redux';
import noteShowForm from './noteShowForm2';
import { updateNote, clearNotes } from '../../actions/noteAction';


const msp = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.note_id];
    
    return {

        user: state.entities.user[state.session.id],
        notes: Object.values(state.entities.notes),
        note: note
    }
};

const mdp = dispatch => ({
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    clearNotes: () => dispatch(clearNotes())
});

export default connect(msp, mdp)(noteShowForm);